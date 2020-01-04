<template>
  <div>
    <div class="chart"></div>
  </div>
</template>

<script>
const d3 = require("d3");
const axios = require("axios");
const DOMAIN = "https://jsonplaceholder.typicode.com/";

export default {
  data() {
    return {
      data: []
    };
  },
  methods: {
    loadData() {
      axios.get(DOMAIN + "todos").then(result => {
      
        for (let index = 0; index < result.data.length; index++) {
          const element =  result.data[index];
          if(element.completed) {
            if (this.data[0]) {
              this.data[0] += 1
            } else {
              this.data[0]= 1  
            }
          } else {
            if (this.data[1]) {
              this.data[1] += 1
            } else {
              this.data[1]= 1
            }
          }
        }

        var t = d3
          .transition()
          .duration(750)
          .ease(d3.easeLinear);
    
        d3.select(".chart")
          .selectAll("div")
          .data(this.data)
          .enter()
          .append("div")
          // .transition(t)
          .style("width", function(d) {
            return (d - 10) + "%";
          })
          .style("font-size", function(d) {
            return 20 + "px";
          })
          .text(function(d,idx) {
            if(idx == 0) return "Terminados " + d
            return "Sin terminar "+ d
          });
      });

    }
  },
  mounted() {
    this.loadData();
  }
};
</script>