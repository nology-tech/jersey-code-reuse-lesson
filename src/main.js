// DEFAULT IMPORT -> BRING IN ONE ITEM / OBJECT FROM ANOTHER FILE
import confetti from "canvas-confetti";
import Chart from "chart.js/auto";
// NAMED IMPORT -> MULTIPLE ITEM / VARIABLES FROM ANOTHER FILE
import { cities, population, customData } from "./data/data.js";
import "./scss/main.scss";
// YOU CAN USE THE ^^ ABOVE IN YOUR CODE NOW
console.log(cities);
console.log(population);

// -------------------
// CONFETTI

const button = document.querySelector("button");

const confettiOptions = {
  particleCount: 100,
  startVelocity: 30,
  spread: 360,
  shapes: ["square", "square", "circle"],
  gravity: 0,
  particleCount: 500,
  colors: ["#22577A", "#38A3A5", "#57CC99", "#80ED99"],
};

button.addEventListener("click", () => {
  confetti(confettiOptions);
});

// -------------------
// CHART.JS

const canvasHTML = document.getElementById("myChart");
const myChart = new Chart(canvasHTML, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// CHALLENGE 1
// MAKE GREEN 25 & PURPLE 22 ON THE GRAPH
// REMOVE THE ORANGE BAR -> ITS GOTTA GO
// RENAME THE RED LABEL TO PINK AND CHANGE THE BACKGROUND AND BORDER COLOUR
// EXT CONFETTI FIRES WHEN YOU CLICK ON THE CHART

// CHALLENGE 2
// Build a dashboard that has at least 3 graphs on it.
// 1 should use the population data displayed on the graph
// 1 should use the cities data displayed on the graph
// The third is up to you,create your own data, you need to import the data from your data folder though.

const cityGraphHTML = document.getElementById("cities-graph");
const populationGraphHTML = document.getElementById("population-graph");
const customDataGraphHTML = document.getElementById("custom-data-graph");

// -------------------
// CITY

const cityLabels = cities.map(city => {
  return city.name;
});

const cityData = cities.map(city => {
  return parseInt(city.population.split(",").join(""));
});

console.log(cityLabels);
console.log(cityData);

const citySettings = {
  type: "bar",
  data: {
    labels: cityLabels,
    datasets: [
      {
        label: "Number of Votes",
        data: cityData,
        backgroundColor: ["#22577A", "#38A3A5", "#57CC99", "#80ED99"],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
};

const cityGraph = new Chart(cityGraphHTML, citySettings);

// -------------------
// POPULATION

const populationDataset = population.map(el => {
  return el.amountOfPeople;
});

const populationLabels = population.map(el => {
  return `${el.minAge}-${el.maxAge}`;
});

console.log(populationDataset);
console.log(populationLabels);

const populationSettings = {
  type: "doughnut",
  data: {
    labels: populationLabels,
    datasets: [
      {
        data: populationDataset,
        backgroundColor: ["#22577A", "#38A3A5", "#57CC99", "#80ED99"],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
};

const populationGraph = new Chart(populationGraphHTML, populationSettings);

// -------------------
// CUSTOM DATA

const customDataSettings = {
  type: "radar",
  data: {
    labels: customData.labels,
    datasets: [
      {
        label: "Scores",
        data: customData.scores,
        fill: true,
        backgroundColor: "#57cc998a",
        pointBackgroundColor: "#22577A",
      },
      {
        label: "Skills",
        data: customData.skills,
        fill: true,
        backgroundColor: "#22577a60",
        pointBackgroundColor: "#57CC99",
      },
    ],
  },
};

const customDataGraph = new Chart(customDataGraphHTML, customDataSettings);
