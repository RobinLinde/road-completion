<script>
  import { onMount } from "svelte";

  export let commits;

  let container;

  onMount(async () => {
    const { Chart } = await import("chart.js");

    const data = commits.map((commit) => {
      return {
        t: commit.datetime,
        y: commit.stats.notWithin
      }
    });

    new Chart(container, {
      type: 'line',
      data: {
        datasets: [{
          data,
          cubicInterpolationMode: "monotone",
          fill: true,
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            type: 'time',
            ticks: {
              max: new Date()
            },
            time: {
              unit: 'week',
              tooltipFormat: 'dddd, MMMM Do YYYY, HH:mm:ss'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  });
</script>

<style>
</style>

<canvas bind:this="{container}"></canvas>