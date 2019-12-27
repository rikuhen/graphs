<template>
    <div>
        <div class="chart"></div>
    </div>
</template>

<script>
const d3 = require("d3");
export default {
  methods: {
    loadData() {
      var data = [30, 86, 168, 281, 303, 365];
      var t = d3
        .transition()
        .duration(750)
        .ease(d3.easeLinear);

      d3.select(".chart")
        .selectAll("div")
        .data(data)
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
      this.loadData()
  },
};
</script>