<template>
  <canvas id="chartjs" width="400" height="400"></canvas>
</template>

<script>
import ChartJs from "chart.js";
const axios = require("axios");
const DOMAIN = "https://jsonplaceholder.typicode.com/";

export default {
  data() {
    return {};
  },
  methods: {
    loadData() {
      axios.get(DOMAIN + "todos").then(result => {
        let data = [];

        for (let index = 0; index < result.data.length; index++) {
          const element = result.data[index];
          if (element.completed) {
            if (data[0]) {
              data[0] += 1;
            } else {
              data[0] = 1;
            }
          } else {
            if (data[1]) {
              data[1] += 1;
            } else {
              data[1] = 1;
            }
          }
        }

        let div = document.getElementById("chartjs");
        var chartJs = new ChartJs(div, {
          type: "bar",
          data: {
            labels: ["Completos", "Incompletos"],
            datasets: [
              {
                label: "# de tareas",
                data: data,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)"
                ],
                borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
                borderWidth: 1
              }
            ]
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }
        });
      });
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>

<style>
</style>