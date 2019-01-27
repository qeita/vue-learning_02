

let vm = new Vue({
  el: '#app',
  data(){
    return {
      inputArray: []
    }
  },
  mounted(){
    this.count = this.$refs.count
    this.input = this.$refs.input
  },
  computed: {
    /**
     * 算出プロパティは、デフォルトでは値を返すgetの役割で使われます。
     * 一方で算出プロパティの更新したい場合、以下のようにsetter/getterで分けて記述することができます。
     * 
     * ここでは、現在の入力数を変更することで 'inputArray' の配列も変更するようにしています
     */
    inputCount: {
      set(n){
        const ary = []
        for(let i = 0; i < n; i++){
          if(this.inputArray[i]){
            ary.push(this.inputArray[i])
          }else{
            ary.push('')
          }
        }
        this.inputArray = ary
      },
      get(){
        return this.inputArray.length
      }
    }
  },
  methods: {
    add(){
      const v = this.input.value
      this.inputArray.push(v)
      this.input.value = ''
    },
    /**
     * 入力の数値が 'inputArray' の配列数より大きい場合、処理を止めます。
     * (入力値が小さい場合に個数を変更できるようにしています)
     */
    changeCount(){
      const n = parseInt(this.count.value, 10)
      if(this.inputArray.length < n) return
      this.inputCount = n
    }
  }
})