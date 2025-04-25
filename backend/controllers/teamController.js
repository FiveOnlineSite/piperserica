const TeamModel = require("../models/teamModel");

const createTeam = async (req, res) => {
  try {
    const { name, designation, department, linkedin_url } = req.body;

    const teamExists = await TeamModel.findOne({ name });

    if (teamExists) {
      return res.status(400).json({
        message:
          "This team member already exists. Try adding team member with another name",
      });
    }

    // Get the total number of existing teams
    const totalteams = await TeamModel.countDocuments();

    const newTeam = new TeamModel({
      name,
      designation,
      linkedin_url,
      department,
      order: totalteams + 1, // Assign a sequence value based on the total number of existing teams
    });

    await newTeam.save();

    res.status(200).json({
      message: "Team member created successfully.",
      newTeam,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in adding team member due to ${error.message}`,
    });
  }
};

const updateTeam = async (req, res) => {
  try {
    const { name, designation, department, linkedin_url, order } = req.body;

    const team = await TeamModel.findById(req.params._id);

    if (!team) {
      return res.status(400).json({
        message: "No team member found with this id to update.",
      });
    }

    const oldOrder = team.order;

    // Adjust the sequence numbers of other team members if necessary
    if (oldOrder !== order) {
      if (oldOrder > order) {
        await TeamModel.updateMany(
          {
            _id: { $ne: req.params._id },
            order: { $gte: order, $lt: oldOrder },
          },
          { $inc: { order: 1 } }
        );
      } else {
        await TeamModel.updateMany(
          {
            _id: { $ne: req.params._id },
            order: { $gt: oldOrder, $lte: order },
          },
          { $inc: { order: -1 } }
        );
      }
    }

    const updatedFields = {
      ...(name && { name }),
      ...(designation && { designation }),
      ...(department && { department }),
      ...(linkedin_url && { linkedin_url }),
      ...(order && { order }),
    };

    const updatedTeam = await TeamModel.findByIdAndUpdate(
      req.params._id,
      updatedFields,
      { new: true }
    );

    return res.status(200).json({
      message: "Team member updated successfully.",
      updatedTeam,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in updating team member due to ${error.message}`,
    });
  }
};

const getTeam = async (req, res) => {
  try {
    const team = await TeamModel.findById(req.params._id);
    console.log(req.params._id);
    if (!team) {
      return res.status(400).json({
        message: "No team member is created with this id.",
      });
    }

    return res.status(200).json({
      message: "Team member fetched successfully.",
      team,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching team member due to ${error.message}`,
    });
  }
};

const getTeams = async (req, res) => {
  try {
    const teams = await TeamModel.find().sort({ order: 1 });
    // console.log(teams)

    if (teams.length === 0) {
      return res.status(400).json({
        message: "No team members are created. Kindly create one.",
      });
    }

    return res.status(200).json({
      message: "All team members fetched successfully.",
      count: teams.length,
      teams,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error in fetching team members due to ${error.message}`,
    });
  }
};

const deleteTeam = async (req, res) => {
  try {
    const teamExists = await TeamModel.findById(req.params._id);

    if (!teamExists) {
      return res.status(400).json({
        message: "Team member not found.",
      });
    }

    const deletedOrder = teamExists.order;

    const deleteteam = await TeamModel.findByIdAndDelete(req.params._id);

    if (!deleteteam) {
      return res.status(500).json({
        message: "Error in deleting the team member.",
      });
    }

    // Update the sequence of the remaining team members
    const updateResult = await TeamModel.updateMany(
      { order: { $gt: deletedOrder } },
      { $inc: { order: -1 } }
    );

    console.log(`Updated ${updateResult.modifiedCount} team member's order.`);

    return res.status(200).json({
      message: "Team member deleted successfully.",
      deleteteam,
    });
  } catch (error) {
    console.error(`Error in deleting team member: ${error.message}`);
    return res.status(500).json({
      message: `Error in deleting team member due to ${error.message}`,
    });
  }
};

module.exports = {
  createTeam,
  updateTeam,
  getTeam,
  getTeams,
  deleteTeam,
};
