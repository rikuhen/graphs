<template>
  <div>
    <div class="chart"></div>
  </div>
</template>

<script>
const d3 = require("d3");
const axios = require("axios");
const DOMAIN = "https://mantis.guayas.gov.ec";
axios.defaults.headers.common["Authorization"] =
  "Ll-isJ9uF4Z8nQueNUOhy7-3Dzl0Q6O1";
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default {
  data() {
    return {
      config: {
        headers: { 
          "Access-Control-Allow-Origin": "*" ,
          "Authorization" : "Ll-isJ9uF4Z8nQueNUOhy7-3Dzl0Q6O1"
        }
      }
    };
  },
  methods: {
    loadData() {
      axios.get(DOMAIN + "/api/rest/index.php/projects/").then(result => {
        console.log(result);
      });

      var t = d3
        .transition()
        .duration(750)
        .ease(d3.easeLinear);

      d3.select(".chart")
        .selectAll("div")
        .data([])
        .enter()
        .append("div")
        .transition(t)
        .style("width", function(d) {
          return d + "px";
        })
        .text(function(d) {
          return d;
        });
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>