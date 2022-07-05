import { ElLoading } from 'element-plus'

const loding = {
  loadingInstance: null,
  open() {
    if (this.loadingInstance === null) {
      this.loadingInstance = ElLoading.service({
        text: '疯狂加载中...',
        background: 'rgba(0,0,0,.5)'
      })
    }
  },
  close() {
    if (this.loadingInstance !== null) {
      this.loadingInstance.close()
      this.loadingInstance = null
    }
  }
}
export { loding }
