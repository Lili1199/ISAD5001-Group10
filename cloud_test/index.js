


function toggleSpecs(serviceType) {
        document.querySelectorAll('.specs').forEach(el => {
            if (el.id === serviceType) {
                el.style.display = el.style.display === 'block' ? 'none' : 'block';
            } else {
                el.style.display = 'none';
            }
        });
        document.querySelector('.price-display').style.display = 'block';
    }

    function updateValue(id, value, unit) {
        document.getElementById(id).textContent = value + " " + unit;
    }

    function calculateTotalPrice() {
        let cpuPrice = parseInt(document.getElementById('cpu').value) * 10;
        let memoryPrice = parseInt(document.getElementById('memory').value) * 5;
        let storagePrice = parseInt(document.getElementById('storage').value) * 0.5;
        let bandwidthPrice = parseInt(document.getElementById('bandwidth').value) * 0.1;
        let totalPrice = cpuPrice + memoryPrice + storagePrice + bandwidthPrice;
        document.getElementById('totalPrice').textContent = 'Total Price: $' + totalPrice.toFixed(2);
    }


      // Chart configurations
      var optionsSmallChart = {
        chart: {
          type: "bar",
          height: 100,
          sparkline: {
            enabled: true,
          },
        },
        series: [
          {
            data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
          },
        ],
      };

      var optionsCircleChart = {
        chart: {
          type: "radialBar",
        },
        series: [70, 60, 90],
        labels: ["Total Sent", "Reached", "Opened"],
      };

      var optionsMainChart = {
        chart: {
          type: "area",
          height: 300,
        },
        series: [
          {
            name: "2024 ",
            data: [830, 840, 835, 850, 849, 860, 870, 891, 950],
          },
          {
            name: "2023",
            data: [820, 830, 825, 840, 839, 850, 860, 871, 930],
          },
        ],
      };

      // Render charts
      var chartCampaignSent = new ApexCharts(
        document.querySelector("#chart-campaign-sent"),
        optionsSmallChart
      );
      var chartNewLeads = new ApexCharts(
        document.querySelector("#chart-new-leads"),
        optionsSmallChart
      );
      var chartDeals = new ApexCharts(
        document.querySelector("#chart-deals"),
        optionsSmallChart
      );
      var chartBookedRevenue = new ApexCharts(
        document.querySelector("#chart-booked-revenue"),
        optionsSmallChart
      );

      var chartCampaigns = new ApexCharts(
        document.querySelector("#chart-campaigns"),
        optionsCircleChart
      );
      var chartRevenue = new ApexCharts(
        document.querySelector("#chart-revenue"),
        optionsMainChart
      );

      chartCampaignSent.render();
      chartNewLeads.render();
      chartDeals.render();
      chartBookedRevenue.render();
      chartCampaigns.render();
      chartRevenue.render();