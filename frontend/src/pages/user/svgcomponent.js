import React, { useRef, useEffect, useState } from "react";

const SvgComponent = () => {
  const svgRef = useRef(null);
  const [activeTab, setActiveTab] = useState("tab1"); // Example state for active tab

  // Use useEffect to restart the animation on component mount
  useEffect(() => {
    restartSvgAnimation();
  }, []);

  // Function to handle tab change
  const handleTabClick = (tab, event) => {
    event.preventDefault();
    if (tab === activeTab) return;

    setActiveTab(tab);
    restartSvgAnimation(); // Restart animation on tab change
  };

  // Function to restart SVG animation
  const restartSvgAnimation = () => {
    const svg = svgRef.current;
    if (svg) {
      svg.classList.remove("active");
      void svg.offsetHeight; // Trigger reflow
      svg.classList.add("active");
    }
  };

  return (
    <div>
      <button onClick={(e) => handleTabClick("tab1", e)}>Tab 1</button>
      <button onClick={(e) => handleTabClick("tab2", e)}>Tab 2</button>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        viewBox="0 0 561 397"
        version="1.1"
      >
        <g id="surface1">
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 16574.807982 11567.416719 L 13349.608679 11567.416719 L 13349.608679 15921.132137 L -0.620191 15921.132137 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-1"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 12891.90781 11251.936083 L 16574.807982 11251.936083 L 16574.807982 11567.416719 L 13176.368693 11567.416719 Z M 12891.90781 11251.936083 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-2"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 16574.807982 10238.76186 L 16569.846455 15915.760495 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-3"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 22276.636197 10231.324202 L 22271.467939 15908.322838 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-4"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 25962.430593 11251.936083 L 22279.530421 11251.936083 L 22279.530421 11567.416719 L 25677.969709 11567.416719 Z M 25962.430593 11251.936083 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-5"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 15808.252055 15921.132137 L 15808.252055 12312.422072 L 14048.5638 12312.422072 L 14048.5638 15921.132137 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-6"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 15499.190267 15921.132137 L 15499.190267 13298.944689 C 15349.930995 12394.856108 14466.572452 12441.134866 14357.832318 13298.944689 L 14357.832318 15921.132137 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-7"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 22994.403774 15921.132137 L 22994.403774 12312.422072 L 24754.29876 12312.422072 L 24754.29876 15921.132137 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-8"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 23303.672293 15921.132137 L 23303.672293 13298.944689 C 23412.619157 12441.134866 24295.9777 12394.856108 24445.030241 13298.944689 L 24445.030241 15921.132137 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-9"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 13349.608679 12013.05636 L 16573.36087 12013.05636 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-10"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 13700.223256 11567.416719 L 13700.223256 12001.899874 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-11"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 14071.510862 11567.416719 L 14071.510862 12001.899874 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-12"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 14442.798469 11567.416719 L 14442.798469 12001.899874 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-13"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 14814.086075 11567.416719 L 14814.086075 12001.899874 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-14"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 15185.373682 11567.416719 L 15185.373682 12001.899874 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-15"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 15556.661288 11567.416719 L 15556.661288 12001.899874 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-16"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 15927.948895 11567.416719 L 15927.948895 12001.899874 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-17"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 16299.236501 11567.416719 L 16299.236501 12001.899874 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-18"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 25498.734545 12013.05636 L 22274.982354 12013.05636 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-19"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 25148.119968 11567.416719 L 25148.119968 12001.899874 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-20"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 24776.832362 11567.416719 L 24776.832362 12001.899874 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-21"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 24405.544755 11567.416719 L 24405.544755 12001.899874 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-22"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 24034.257149 11567.416719 L 24034.257149 12001.899874 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-23"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 23662.969542 11567.416719 L 23662.969542 12001.899874 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-24"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 23291.681936 11567.416719 L 23291.681936 12001.899874 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-25"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 22920.394329 11567.416719 L 22920.394329 12001.899874 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-26"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 22549.106723 11567.416719 L 22549.106723 12001.899874 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-27"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 29699.494102 15921.132137 L 25509.691251 15921.132137 L 25509.691251 11567.416719 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-28"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 17819.324346 11421.969196 L 17814.156089 15915.760495 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-29"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 17818.704156 11931.655332 L 16573.36087 11931.655332 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-30"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 17817.877234 12774.796442 L 16572.533949 12774.796442 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-31"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 17817.050313 13617.937552 L 16571.913758 13617.937552 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-32"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 17816.430122 14461.078663 L 16571.086837 14461.078663 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-33"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 17815.603201 15304.013172 L 16570.259915 15304.013172 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-34"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 21026.124653 11421.969196 L 21031.292911 15915.760495 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-35"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 22272.08813 11931.655332 L 21026.744844 11931.655332 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-36"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 22272.708321 12774.796442 L 21027.571765 12774.796442 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-37"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 22273.535242 13617.937552 L 21028.191956 13617.937552 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-38"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 22274.362163 14461.078663 L 21029.018878 14461.078663 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-39"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 22274.982354 15304.013172 L 21029.845799 15304.013172 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-40"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 20669.721628 15921.132137 L 20669.721628 13380.139116 C 20446.659642 11293.049801 18432.072935 11253.588896 18175.520641 13380.139116 L 18175.520641 15921.132137 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-41"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 18294.39056 11842.403442 C 18294.39056 11780.836167 18244.361829 11730.838581 18182.756202 11730.838581 C 18121.150574 11730.838581 18071.328574 11780.836167 18071.328574 11842.403442 C 18071.328574 11903.970718 18121.150574 11953.761702 18182.756202 11953.761702 C 18244.361829 11953.761702 18294.39056 11903.970718 18294.39056 11842.403442 Z M 18294.39056 11842.403442 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-42"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 20777.841571 11842.403442 C 20777.841571 11780.836167 20728.019571 11730.838581 20666.413943 11730.838581 C 20604.808316 11730.838581 20554.779585 11780.836167 20554.779585 11842.403442 C 20554.779585 11903.970718 20604.808316 11953.761702 20666.413943 11953.761702 C 20728.019571 11953.761702 20777.841571 11903.970718 20777.841571 11842.403442 Z M 20777.841571 11842.403442 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-43"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 16574.807982 11421.969196 L 22279.530421 11421.969196 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-44"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 16574.807982 11248.837059 L 22279.530421 11248.837059 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-45"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 16763.9662 10536.268157 L 17491.656832 10536.268157 L 17491.656832 7714.71017 C 17433.358889 6907.104534 16826.605479 6922.599654 16763.9662 7714.71017 Z M 16763.9662 10536.268157 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-46"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 16763.9662 7714.71017 L 17491.656832 7714.71017 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-47"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 17128.845167 7114.739137 L 17128.845167 6845.537259 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-48"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 16763.9662 8859.076406 L 22091.819314 8859.076406 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-49"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 16965.734966 8859.076406 L 17289.474605 8859.076406 L 17289.474605 8121.30211 C 17272.522721 7867.595351 16980.206087 7870.281171 16965.734966 8121.30211 Z M 16965.734966 8859.076406 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-50"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 21364.128683 10536.268157 L 22091.819314 10536.268157 L 22091.819314 7714.71017 C 22033.521372 6907.104534 21426.767961 6922.599654 21364.128683 7714.71017 Z M 21364.128683 10536.268157 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-51"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 21364.128683 7714.71017 L 22091.819314 7714.71017 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-52"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 21729.00765 7114.739137 L 21729.00765 6845.537259 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-53"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 21565.897449 8859.076406 L 21889.637088 8859.076406 L 21889.637088 8121.30211 C 21872.685204 7867.595351 21580.368569 7870.281171 21565.897449 8121.30211 Z M 21565.897449 8859.076406 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-54"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 17491.656832 8356.414725 L 21364.128683 8356.414725 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-55"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 17814.362819 8356.414725 L 17814.362819 8859.076406 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-56"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 18137.068807 8356.414725 L 18137.068807 8859.076406 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-57"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 18459.774795 8356.414725 L 18459.774795 8859.076406 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-58"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 18782.480782 8356.414725 L 18782.480782 8859.076406 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-59"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 19105.18677 8356.414725 L 19105.18677 8859.076406 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-60"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 19427.892757 8356.414725 L 19427.892757 8859.076406 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-61"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 19750.598745 8356.414725 L 19750.598745 8859.076406 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-62"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 20073.304732 8356.414725 L 20073.304732 8859.076406 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-63"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 20396.01072 8356.414725 L 20396.01072 8859.076406 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-64"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 20718.716708 8356.414725 L 20718.716708 8859.076406 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-65"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 21041.422695 8356.414725 L 21041.422695 8859.076406 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-66"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 13349.608679 11251.936083 L 13349.608679 10238.76186 L 16763.9662 10238.76186 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-67"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 17491.656832 10238.76186 L 21364.128683 10238.76186 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-68"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 25509.691251 11251.936083 L 25509.691251 10238.76186 L 22091.819314 10238.76186 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-69"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 25509.691251 10536.268157 L 13349.608679 10536.268157 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-70"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 17950.391352 10536.268157 L 17950.391352 11248.837059 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-71"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 18293.356909 10536.268157 L 18293.356909 11248.837059 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-72"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 18842.019107 10536.268157 L 18842.019107 11248.837059 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-73"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 19184.984663 10536.268157 L 19184.984663 11248.837059 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-74"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 19740.675691 10536.268157 L 19740.675691 11248.837059 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-75"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 20083.641247 10536.268157 L 20083.641247 11248.837059 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-76"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 20632.303445 10536.268157 L 20632.303445 11248.837059 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-77"
          ></path>
          <path
            style={{
              fill: "none",
              strokeWidth: "70.56",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "rgb(29, 161, 242)",
              strokeOpacity: "1",
              strokeMiterlimit: "22.9256",
            }}
            d="M 20975.269001 10536.268157 L 20975.269001 11248.837059 "
            transform="matrix(0.0188954,0,0,0.0189072,0,0)"
            class="svg-elem-78"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default SvgComponent;
