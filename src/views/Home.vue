<template>
  <div class="home">
    <el-container class="container">
      <el-header class="header">广东省疫情动态跟踪评价系统</el-header>
      <el-container class="body-container">
        <el-container class="main-container">
          <el-main class="main">
            <el-card shadow="hover" class="grid-part" id="header1">
              <h4>广东省疫情情况</h4>
              <div class="subtitle">数据更新至 2021.11.10</div>
              <el-row>
                <el-col :span="6">
                  <increment
                    title="现有确诊"
                    :currentNumber="55"
                    :changeNumber="+13"
                    color="#ff6a57"
                  />
                </el-col>
                <el-col :span="6">
                  <increment
                    title="无症状"
                    :currentNumber="25"
                    :changeNumber="+5"
                    color="#e86d48"
                /></el-col>
                <el-col :span="6">
                  <increment
                    title="现有疑似"
                    :currentNumber="3"
                    :changeNumber="0"
                    color="#ec9217"
                /></el-col>
                <el-col :span="6">
                  <increment
                    title="现有重症"
                    :currentNumber="5"
                    :changeNumber="-1"
                    color="#545499"
                /></el-col>
              </el-row>
              <el-row>
                <el-col :span="6">
                  <increment
                    title="累计确诊"
                    :currentNumber="16700"
                    :changeNumber="+13"
                    color="#e83132"
                  />
                </el-col>
                <el-col :span="6">
                  <increment
                    title="境外输入"
                    :currentNumber="2400"
                    :changeNumber="+7"
                    color="#476da0"
                /></el-col>
                <el-col :span="6">
                  <increment
                    title="累计治愈"
                    :currentNumber="12879"
                    :changeNumber="+13"
                    color="#10aeb5"
                /></el-col>
                <el-col :span="6">
                  <increment
                    title="累计死亡"
                    :currentNumber="200"
                    :changeNumber="+0"
                    color="#4d5054"
                /></el-col>
              </el-row>
            </el-card>
            <el-card shadow="hover" class="map-part" id="header2">
              <h4>广东省疫情实时分布地图</h4>
              <div class="subtitle">截至2021.11.10</div>
              <div class="map-wrapper">
                <iframe
                  src="static/map.html"
                  frameborder="0"
                  class="map"
                  scrolling="no"
                ></iframe>
              </div>
            </el-card>
            <input-form  @changeChecked="changeChecked"></input-form>
            <prediction v-if="checked"></prediction>
            <el-card
              shadow="hover"
              v-if="checked"
              class="comment-part"
              id="header5"
            >
              <h4>疫情扩散情况评价</h4>
              <div class="comment">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <el-button type="primary" class="download">
                <a href="/static/疫情扩散情况评价.doc" download="疫情扩散情况评价.doc">
                  下载评价情况
                </a>
                <el-icon class="el-icon--right">
                  <Download />
                </el-icon>
              </el-button>
            </el-card>
          </el-main>
          <el-footer class="footer">
            <div class="footer-content">积极防护，保护自己，戴口罩，勤洗手</div>
          </el-footer>
        </el-container>
        <el-aside class="aside">
          <el-affix class="affix" :offset="110">
            <el-menu class="menu" active-text-color="#303133">
              <el-menu-item index="1" @click="returnTop(1)">
                <span class="menu-item">疫情情况</span>
              </el-menu-item>
              <el-menu-item index="2" @click="returnTop(2)">
                <span class="menu-item">预测地图</span>
              </el-menu-item>
              <el-menu-item
                index="3"
                @click="returnTop(3)"
                :disabled="!checked"
              >
                <span class="menu-item">新增趋势</span>
              </el-menu-item>
              <el-menu-item
                index="4"
                @click="returnTop(4)"
                :disabled="!checked"
              >
                <span class="menu-item">预测时间线</span>
              </el-menu-item>
              <el-menu-item
                index="5"
                @click="returnTop(5)"
                :disabled="!checked"
              >
                <span class="menu-item">扩散情况评价</span>
              </el-menu-item>
            </el-menu>
          </el-affix>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from "vue";
import Increment from "../components/Increment.vue";
import InputForm from "../components/InputForm.vue";
import Prediction from "../components/Prediction.vue";
import { Download } from "@element-plus/icons";

export default defineComponent({
  name: "Home",
  components: {
    Increment,
    Prediction,
    InputForm,
    Download,
  },
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    returnTop(index) {
      document.querySelector("#header" + index).scrollIntoView(true);
    },
    changeChecked() {
      this.checked = true;
    },
  },
});
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  /* height: 1200px; */
  /* height: 2660px; */

  .container {
    width: 100%;
    height: 100%;
    padding: 0 100px;

    .header {
      /* background-color: yellow; */
      /* background: rgb(198, 226, 255); */
      margin: 10px 20px 0px 20px;
      border-radius: 5px;
      font-size: 30px;
      font-weight: 700;
      line-height: 50px;
      height: 50px;
    }

    .body-container {
      .aside {
        /* background-color: blue; */
        width: 250px;
        .affix {
          .menu {
            /* background-color: rgb(217, 236, 255); */
            border: 2px solid #f2f6fc;
            border-radius: 5px;
            .menu-item {
              font-size: 16px;
              /* border-bottom: 2px solid rgb(160, 207, 255); */
            }
          }
        }
      }
      .main-container {
        .main {
          .grid-part {
            .subtitle {
              font-size: 14px;
              color: #999;
              margin: 5px 0;
            }

            .el-row {
              margin-bottom: 20px;
              &:last-child {
                margin-bottom: 0;
              }
            }
            .el-col {
              border-radius: 4px;
            }
            .bg-purple-dark {
              background: #99a9bf;
            }
            .bg-purple {
              background: #d3dce6;
            }
            .bg-purple-light {
              background: #e5e9f2;
            }
            .grid-content {
              border-radius: 4px;
              min-height: 36px;
            }
          }
          .map-part {
            margin-top: 10px;
            position: relative;
            height: 800px;
            .subtitle {
              font-size: 14px;
              color: #999;
              margin: 5px 0;
            }
            .map-wrapper {
              position: absolute;
              width: 100%;
              top: 0;
              left: 0;
              transform-origin: center top;
              transform: scale(0.9);
              .map {
                width: 100%;
                height: 880px;
              }
            }
          }
          .comment-part {
            margin-top: 10px;
            line-height: 1.5;
            .comment {
              margin-top: 10px;
            }
            .download {
              float: right;
              margin: 10px 0;
              a {
                text-decoration: none;
                color: #ffffff;
                &:hover {
                  color: #ffffff;
                }
              }
            }
          }
        }
        .footer {
          /* background-color: green; */
          border: 2px solid #c0c4cc;
          border-radius: 5px;
          margin: 20px;
          height: 80px;
          text-align: center;
          .footer-content {
            line-height: 80px;
            height: 100%;
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>