cardList@include yh-card;<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue";
import dayjs from "dayjs";
import VChart from "@/components/echarts/index";
import { ArrowDown } from "@element-plus/icons-vue";
const chineseWeekdays = ["日", "一", "二", "三", "四", "五", "六"];
const state = reactive({
  cardData: {} as any,
  cardList:[
  {
    title: "666",
    value: "unfinishedTaskNum",
    icon:"icon-woderenwu",
  },
  {
    title: "222",
    value: "income",
    icon:"icon-gongsishouru",
  },
  {
    title: "333",
    value: "expenditure",
    icon:"icon-gongsizhichu",
  },
  {
    title: "444",
    value: "employeeNum",
    icon:"icon-renliziyuan",
  },
],
  fyqkData: {} as any,
  qxChartOption: {} as any,
  isRcTable: false,
});

const selectBwlChange = (val: string) => {
  state.isRcTable = val === "table";
};

const initFinanceCard = () => {
  state.cardData = {
    unfinishedTaskNum: 0,
    employeeNum: 20,
    income: 4660545,
    expenditure: 123123,
  };
};

const isFinanceCardComputed = ref(true);

const initAdminFYQX = () => {
  state.fyqkData = {
    yearMonths: ["2024-01", "2024-02", "2024-03", "2024-04", "2024-05", "2024-06", "2024-07", "2024-08", "2024-09", "2024-10", "2024-11", "2024-12"],
    inData: [4383333, 111, 1, 1000, 0, 0, 100, 276000, 0, 0, 0, 0],
    outData: [0, 0, 0, 0, 0, 123123, 0, 0, 0, 0, 0, 0],
  };
  state.qxChartOption = {
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(0,0,0,.6)",
      borderColor: "#5cbebd",
      textStyle: {
        color: "#FFF",
      },
    },
    xAxis: {
      type: "category",
      data: ["2024-01", "2024-02", "2024-03", "2024-04", "2024-05", "2024-06", "2024-07", "2024-08", "2024-09", "2024-10", "2024-11", "2024-12"],
      boundaryGap: false,
      axisLine: {
        lineStyle: {},
      },
      axisTick: {
        show: false,
      },
    },
    grid: {
      left: 0,
      right: 5,
      top: 10,
      bottom: 0,
      containLabel: true,
    },
    yAxis: {
      type: "value",
      axisLabel: {
        show: true,
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
        },
      },
    },
    series: [
      {
        name: "收入",
        data: [4383333, 111, 1, 1000, 0, 0, 100, 276000, 0, 0, 0, 0],
        type: "line",
        showAllSymbol: true,
        symbol: "emptyCircle",
        symbolSize: 3,
        itemStyle: {
          color: "#00a3a2",
          width: 1.5,
        },
      },
      {
        name: "支出",
        data: [0, 0, 0, 0, 0, 123123, 0, 0, 0, 0, 0, 0],
        type: "line",
        showAllSymbol: true,
        symbol: "emptyCircle",
        symbolSize: 3,
        itemStyle: {
          color: "#f9d423",
          width: 1.5,
        },
      },
    ],
  };
};

const init = () => {
  initFinanceCard();
  initAdminFYQX();
};


init();

const todayTime=ref(dayjs().format("YYYY-MM-DD HH:mm:ss"))


</script>

<template>
  <div>
    <h1 style="margin-bottom: 12px;">切换6.7.3后此页面有样式，7.0.0、7.0.1均样式不能加载</h1>
    <ul class="info-card">
      <li class="info-item" v-for="item in state.cardList">
        <div class="infor-value">{{ state.cardData[item.value] }}</div>
        <div class="info-title">
          <i class="iconfont" :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </div>
      </li>
      <li class="user-info">
        <div class="user-data">
          <div class="user-name">
            <span class="name">啊啊啊</span>
            <span class="duty">333</span>
          </div>
          <div class="user-day">
            <span>{{ todayTime }}</span>
            <span> 星期{{ chineseWeekdays[dayjs().day()] }}</span>
          </div>
        </div>
      </li>
    </ul>
    <ul class="tj-card">
      <li class="tj-item">
        <h4>快捷入口</h4>
        <h5>浏览记录</h5>
      </li>
      <li class="tj-item">
        <h4>情况</h4>
        <h5 v-if="!isFinanceCardComputed">情况</h5>
        <ul class="fyqk-wrap" v-if="!isFinanceCardComputed">
          <li>
            <p>{{ state.fyqkData["travelMoney"] }}</p>
            <div>哈哈1</div>
          </li>
          <li>
            <p>{{state.fyqkData["expenseclaimMoney"] }}</p>
            <div>哈哈12</div>
          </li>
          <li>
            <p>{{state.fyqkData["otherpaymentMoney"] }}</p>
            <div>哈哈13</div>
          </li>
        </ul>
        <h5>嘿嘿</h5>
        <VChart :option="state.qxChartOption" autoresize :class=" 'qx-admin-charts' "></VChart>
      </li>
      <li class="tj-item">
        <h4 style="margin-bottom: 10px" class="flex justify-between">
          我的日程
          <el-dropdown @command="selectBwlChange">
            <span class="bwl-select">
              {{ state.isRcTable ? "表格展示" : "日历展示" }}
              <el-icon>
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="table">表格展示</el-dropdown-item>
                <el-dropdown-item command="rl">日历展示</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </h4>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@mixin yh-card{
    background-color: #FFF;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05), 0 4px 5px rgba(0, 0, 0, 8%), 0 2px 4px -1px rgba(0, 0, 0, 12%);
    border-radius: 4px;
}
.info-card {
  min-height: 120px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
  column-gap: 10px;

  .info-item {
    @include yh-card;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:nth-child(1) {
      background: linear-gradient(90deg, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
    }
    &:nth-child(2) {
      background: linear-gradient(90deg, #2af598 0%, #009efd 100%);
    }
    &:nth-child(3) {
      background: linear-gradient(90deg, #bcc5ce 0%, #929ead 98%);
    }
    &:nth-child(4) {
      background: linear-gradient(90deg, #c471f5 0%, #fa71cd 100%);
    }
  }

  .infor-value {
    text-align: right;
    font-size: 20px;
    line-height: 1;
    font-weight: 900;
  }
  .info-title {
    margin-top: 10px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    opacity: 0.5;
    i {
      font-size: 44px;
      margin-bottom: -5px;
    }
  }
  .user-info {
    @include yh-card;
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 4px;
    background-repeat: no-repeat;
    background-position: right bottom;
    .user-img {
      width: 54px;
      height: 54px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }
  .user-data {
    .user-name {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
    .name {
      font-size: 20px;
      font-weight: 900;
      line-height: 1;
    }
    .duty {
      margin-left: 10px;
      font-size: 14px;
      line-height: 1;
    }
    .user-day {
      font-size: 14px;
    }
  }
}

.qx-admin-charts {
  height: calc(100% - 70px);
}
h4 {
  font-size: 12px;
  font-weight: 900;
}
h5 {
  font-size: 12px;
  line-height: 15px;
  text-indent: 1em;
  margin: 16px 0;
}

.tj-card {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  margin-top: 10px;
  height: 300px;
  .tj-item {
    @include yh-card;
    padding: 10px;
  }
}

.bwl-select {
  font-size: 12px;
  cursor: pointer;
}


</style>


