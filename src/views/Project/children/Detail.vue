<template>
  <div class="detail">
    <div class="detail-top">
      <van-nav-bar title="任务详情">
        <template #right>
          <van-icon name="ellipsis" size="22" color="#565656"/>
        </template>
      </van-nav-bar>
    </div>
    <div class="detail-content">
      <van-cell title="xxx" size="large" />
      <div class="detail-line">
        <div>
          <div class="detail-line-status">
            <van-icon name="passed" size="60" color="#26978F"/>
            <div class="detail-line-status-text">
              <div class="detail-line-status-text-status">进行中</div>
              <div class="detail-line-status-text-text">状态</div>
            </div>
          </div>
          <div class="detail-line-member">
            <div class="detail-line-member-icon">
              <div class="detail-line-member-icon-text">小安</div>
            </div>
            <div class="detail-line-member-text">
              <div class="detail-line-member-text-status">进行中</div>
              <div class="detail-line-member-text-text">负责人</div>
            </div>
          </div>
        </div>
      </div>
      <div style="background-color: #D5D5D5;height: 0.1pt;width: 100%"></div>
      <van-cell-group>
        <van-cell is-link class="detail-cell" size="large" value="data" value-class="detail-cell-value">
        <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="detail-cell-title">开始时间</span>
          </template>
        </van-cell>
        <van-cell is-link class="detail-cell" size="large" value="data" value-class="detail-cell-value">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="detail-cell-title">截止时间</span>
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group title="任务信息">
        <van-cell is-link class="detail-cell" size="large" value="data" value-class="detail-cell-value">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="detail-cell-title">所属项目</span>
          </template>
        </van-cell>
        <van-cell is-link class="detail-cell" size="large" value="data" value-class="detail-cell-value">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="detail-cell-title">需求类型</span>
          </template>
        </van-cell>
        <van-cell is-link class="detail-cell" size="large" value="data" value-class="detail-cell-value">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="detail-cell-title">优先级</span>
          </template>
        </van-cell>
        <van-cell is-link class="detail-cell" size="large" value="data" value-class="detail-cell-value">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="detail-cell-title">参与人</span>
          </template>
        </van-cell>
        <van-cell is-link class="detail-cell" size="large" value="data" value-class="detail-cell-value">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="detail-cell-title">描述</span>
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group title="其他信息">
        <van-cell is-link class="detail-cell" size="large" value="data" value-class="detail-cell-value">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="detail-cell-title">子需求</span>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Detail"
  }
</script>

<style scoped lang="less">
.detail {
  &-line {
    display: flex;
    background-color: #FFFFFF;
    height: 81pt;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    &-status {
      display: flex;
      float: left;
      margin-left: 20pt;
      &-text {
        height: 45pt;
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 17pt;
        margin-left: 19pt;
        &-status {
          font-size: 12pt;
        }
        &-text {
          font-size: 11pt;
          color: #A2A2A2;
        }
      }

    }
    &-member {
      display: flex;
      float: right;
      margin-right: 20pt;
      &-icon {
        height: 45pt;
        width: 45pt;
        background-color: #70768E;
        border-radius: 45pt;
        float: right;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &-text {
          font-size: 12pt;
          color: #ffffff;
        }
      }
      &-text {
        height: 45pt;
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 17pt;
        margin-left: 19pt;
        &-status {
          font-size: 12pt;
        }
        &-text {
          font-size: 11pt;
          color: #A2A2A2;
        }
      }
    }
  }
  &-cell {
    &-title {
      margin-right: 4px;
      vertical-align: middle;
      color: #797979;
    }
    &-value {
      margin-right: 4px;
      vertical-align: middle;
      color: #333333;
    }
  }

}
</style>