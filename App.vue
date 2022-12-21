<template>
  <div class="home">
    <div class="header">
      <h3>奥格森问卷</h3>
      <!-- <div class="bnt">
          <el-button type="primary" :icon="Delete" />
        </div>-->
    </div>

    <div class="content">
      <div class="list">
        <div class="title">
          <h1>奥格森产品及服务满意度调查</h1>
          <p>
            尊敬的客户您好，非常感谢一直以来您对奥格森的认可及支持，
            作为产品的品牌企业，我们奥格森致力于更好地服务您。
            这份问卷主要是收集您对奥格森产品的看法以及相关的建议，
            再次非常感谢您抽出一定的时间来填写这份问卷。
          </p>
        </div>
      </div>

      <div class="list">
        <h3>请输入您的名称及邮件</h3>
        <div class="name">
          <ul>
            <li>
              <span> 请输入您的名字 </span>
              <el-input
                v-model="answer.username"
                autosize
                type="textarea"
                placeholder="请输入您的名字"
                class="names"
                prop
              />
            </li>

            <li>
              <span> 请输入您的邮箱 </span>
              <el-input
                v-model="answer.mail"
                autosize
                type="textarea"
                placeholder="请输入您的名字"
                class="mail"
              />
            </li>
          </ul>
        </div>
      </div>

      <div class="list">
        <div class="text">
          <h3>发表您对奥格森的看法</h3>
        </div>
        <div class="box">
          <el-input
            v-model="answer.opinion"
            :rows="2"
            type="textarea"
            placeholder="Please input"
            class="input"
          />
        </div>
      </div>

      <div class="list">
        <div class="text">
          <h3>奥格森产品评价及看法建议</h3>
        </div>
        <div class="box">
          <div class="product">
            <div class="products">
              <div class="from">
                <el-cascader
                  :options="options"
                  :props="props"
                  clearable
                  placeholder="请选择奥格森产品"
                  class="endoscope"
                ></el-cascader>
              </div>

              <div class="choose">
                <ul>
                  <li>
                    <span>产品评分</span>
                    <el-rate v-model="answer.value1" clearable />
                  </li>
                  <li>
                    <span>物流评分</span>
                    <el-rate v-model="answer.value2" clearable />
                  </li>
                  <li>
                    <span>服务评分</span>
                    <el-rate v-model="answer.value3" clearable />
                  </li>
                </ul>
              </div>
            </div>

            <div class="advicee">
              <p>请描述您的建议</p>
              <el-input
                v-model="answer.endoscope"
                autosize
                type="textarea"
                placeholder="请输入您对奥格森内窥镜摄像系统产品的看法及建议"
                class="texe"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="list">
        <div class="text">
          <h3>奥格森服务</h3>
        </div>
        <div class="box">
          <div class="serve">
            <ul>
              <li>
                <span>评分点一</span>
                <el-rate v-model="answer.value4" clearable />
              </li>
              <li>
                <span>评分点二</span>
                <el-rate v-model="answer.value5" clearable />
              </li>
              <li>
                <span>评分点三</span>
                <el-rate v-model="answer.value6" clearable />
              </li>
              <li>
                <span>评分点四</span>
                <el-rate v-model="answer.value7" clearable />
              </li>
            </ul>
            <div class="acc">
              <p>请描述您的建议</p>
              <el-input
                v-model="answer.serves"
                autosize
                type="textarea"
                placeholder="Please input"
                class="textarea"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="list">
        <div class="submit">
          <ul>
            <li>
              <el-button
                color="#153692"
                v-on:click="submit()"
                :disabled="
                  !answer.username ||
                  !answer.mail ||
                  !answer.endoscope ||
                  !answer.serves
                  // eslint-disable-next-line vue/no-parsing-error
                "
              >
                Submit
              </el-button>
            </li>
            <li>
              <el-button color="#ccc">cancel</el-button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { ref } from "vue";


export default {
  name: "SurveyVue",

  data() {
    return {
      answer: [
        {
          username: "",
          mail: "",
          opinion: "",
          endoscope: "",
          light: "",
          serves: "",
          value1: ref(3),
          value2: ref(3),
          value3: ref(3),
          value4: ref(3),
          value5: ref(3),
          value6: ref(3),
          value7: ref(3),
        },
      ],
      options: [
        {
          value: "AGM UHD1",
          label: "AGM UHD1",
        },
        {
          value: "AGM UHD3",
          label: "AGM UHD3",
        },
        {
          value: "AGM HD3",
          label: "AGM HD3",
        },
        {
          value: "AGM HD2",
          label: "AGM HD2",
        },
        {
          value: "AGM HD1",
          label: "AGM HD1",
        },
        {
          value: "AGM P1",
          label: "AGM P1",
        },

        {
          value: "AGS 210",
          label: "AGS 210",
        },
        {
          value: "AGS 200",
          label: "AGS 200",
        },
        {
          value: "AGS 100",
          label: "AGS 100",
        },
        {
          value: "AGS 102L",
          label: "AGS 102L",
        },
        {
          value: "AGS PL100",
          label: "AGS PL100",
        },
      ],
    };
  },

    methods:{
        submit(){
         
          this.$axios.post('http://localhost:8088/survey/save,this.form').then(res=>res.data).then(res=>{
                    console.log(res)
                    if(res.code==200){

                        this.$message({
                            message: '操作成功！',
                            type: 'success'
                        });
                        this.centerDialogVisible = false
                        this.loadPost()
                        this. resetForm()
                    }else{
                        this.$message({
                            message: '操作失败！',
                            type: 'error'
                        });
                    }

                })
      }
    },

  setup() {
    
    return {
      
      props: {
        // props.
        multiple: true,
      },

    
    };



    
  },
};
</script>


<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
}

.home {
  .header {
    height: 72px;
    padding: 0 5vw;
    display: flex;
    justify-content: center;
    // justify-content: space-between;
    align-items: center;
    background-color: #eee;

    h3 {
      font-size: 2vw;
      font-family: AlimamaShuHeiTi;
    }
  }

  h3 {
    font-size: 1.8vw;
    letter-spacing: 4px;
  }

  .content {
    font-family: AlimamaShuHeiTi;
    padding: 5vw;
    overflow: hidden;

    .list {
      padding: 2.5vw 0;

      .name {
        padding: 1.5vw 0;
        column-count: 1;

        ul {
          column-count: 2;

          li {
            -webkit-column-break-inside: avoid;

            padding: 0 0 0.5vw;

            span {
              font-size: 0.5vw;
              letter-spacing: 4px;

              color: #666;
            }

            .names,
            .mail {
              padding: 1vw 0 0;
              font-size: 0.5vw;
              width: 100%;
            }
          }
        }
      }

      .title {
        padding: 2.5vw 0 0;
        text-align: center;

        h1 {
          letter-spacing: 4px;
          font-size: 2.4vw;
          padding: 0 0 1vw;
          color: #333;
        }

        p {
          font-size: 0.75vw;
          letter-spacing: 2px;
          line-height: 1.5;
          padding: 0 7.5vw;
          color: #666;
        }
      }

      .text {
        padding: 0 0 1.5vw;

        h3 {
          padding-left: 2.5vw;
          font-size: 1.8vw;
          letter-spacing: 4px;
          color: #444;
        }
      }

      .box {
        padding: 0 2.5vw;

        .input {
          font-size: 0.75vw;
          letter-spacing: 4px;
        }

        .txt {
          width: 82vw;
          overflow: hidden;

          padding: 1.5vw;

          p {
            font-size: 1vw;
            letter-spacing: 3px;
            line-height: 1.5;
            word-break: break-all;
          }
        }

        .product {
          .texlight,
          .texe {
            //width: 82vw;
            display: flex;
            font-size: 0.5vw;
            letter-spacing: 3px;
          }

          .endoscope {
            font-size: 0.5vw;
            min-height: 5vw;
          }

          .products {
            column-count: 1;
            padding: 0 0 1.5vw;

            .chooses,
            .choose {
              -webkit-column-break-inside: avoid;
              padding: 2.5vw 0 0;

              ul {
                text-align: start;

                li {
                  display: flex;
                  flex-direction: column;
                  padding: 0 0 0.5vw;

                  span {
                    font-size: 0.5vw;
                    letter-spacing: 4px;
                    color: #666;
                  }
                }
              }
            }
          }

          .advicelight,
          .advicee {
            p {
              padding: 0 0 0.75vw;
              font-size: 0.75vw;
            }

            .textarea {
              font-size: 1vw;
              letter-spacing: 2px;
              padding: 0.5vw;
              min-height: 5vw;
            }
          }
        }

        .serve {
          text-align: left;

          .title {
            padding: 0 0 0.5vw;
          }

          ul {
            padding: 0;
            column-count: 2;

            li {
              display: flex;
              flex-direction: column;
              -webkit-column-break-inside: avoid;
              padding: 0.5vw 0;

              span {
                font-size: 0.5vw;
                letter-spacing: 4px;
                color: #666;
              }
            }
          }

          .acc {
            padding: 1.5vw 0;

            p {
              padding: 0 0 0.5vw;
              font-size: 1vw;
            }
          }
        }
      }

      .submit {
        padding: 2.5vw 25vw;

        ul {
          column-count: 2;

          li {
            display: flex;
            justify-content: center;
            align-items: center;
            -webkit-column-break-inside: avoid;
          }
        }
      }
    }

    .list:nth-child(2n + 1) {
      background-color: #f8f8f8;
    }
  }
}
</style>
