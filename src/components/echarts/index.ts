import VCharts from "./vue-echart.vue";
import { use, registerTheme } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, PieChart, MapChart, EffectScatterChart, LineChart } from "echarts/charts";
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
  VisualMapComponent,
  GeoComponent,
  MarkPointComponent,
  MarkLineComponent,
} from "echarts/components";
import "echarts/theme/dark";

use([
  CanvasRenderer,
  BarChart,
  PieChart,
  MapChart,
  EffectScatterChart,
  LineChart,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  TitleComponent,
  DatasetComponent,
  VisualMapComponent,
  GeoComponent,
  MarkPointComponent,
  MarkLineComponent,
]);

registerTheme("dark", {
  backgroundColor: "transparent",
  legend: {
    textStyle: {
      color: "rgba(255,255,255,.6)",
    },
  },
  title: {
    textStyle: {
      rich: {
        value: {
          color: "rgba(255, 255, 255, 0.9)",
        },
        name: {
          color: "rgba(255, 255, 255, 0.55)",
        },
      },
    },
  },
  pie: {
    itemStyle: {
      borderWidth: 0,
      borderColor: "#ccc",
    },

    label: {
      color: "rgba(255, 255, 255, 0.9)", // 饼状图标签字体颜色
    },
  },
  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        //x轴label线颜色
        color: "#848484",
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: "#848484",
      },
    },
    axisLabel: {
      show: true,
      color: "rgba(255,255,255,.35)",
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ["#848484"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"],
      },
    },
  },
  valueAxis: {
    axisLine: {
      show: false,
      lineStyle: {
        //value轴上方名字颜色
        color: "rgba(255,255,255,0.7)",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#A1A1A1",
      },
    },
    axisLabel: {
      show: true,
      //value轴label颜色
      color: "#B3B3B3",
    },
    splitLine: {
      show: true,
      lineStyle: {
        //value轴线颜色
        color: ["rgba(255,255,255,.2)", "rgba(255,255,255,.2)"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"],
      },
    },
  },
});

registerTheme("light", {
  backgroundColor: "transparent",
  legend: {
    textStyle: {
      color: "rgba(0,0,0,.6)",
    },
  },
  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        //x轴label线颜色
        color: "#A8A8A8",
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: "#5D5D5D",
      },
    },
    axisLabel: {
      show: true,
      color: "rgba(0,0,0,.45)",
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ["#848484"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"],
      },
    },
  },
  valueAxis: {
    axisLine: {
      show: false,
      lineStyle: {
        //value轴上方名字颜色
        color: "rgba(0,0,0,0.7)",
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: "#A1A1A1",
      },
    },
    axisLabel: {
      show: true,
      //value轴label颜色
      color: "rgba(0,0,0,0.65)",
    },
    splitLine: {
      show: true,
      lineStyle: {
        //value轴线颜色
        color: ["rgba(0,0,0,.2)", "rgba(0,0,0,.2)"],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"],
      },
    },
  },
});

export default VCharts;
