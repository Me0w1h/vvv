<template>
<el-row>
  <p>222222222222222</p>
</el-row>
<el-row class="Exam" :gutter="20">
        <el-col :span="12" style="margin-top:20px">
        <p>正在进行的考试</p>
        <br/>
             <el-card shadow="hover">
               <el-table
                :data="tableData"
                style="width: 100%"
                :row-class-name="tableRowClassName">    
                <el-table-column
                prop="date"
                label="日期"
                width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="address"
                label="地址">
                </el-table-column>
                    </el-table>
            </el-card>
            <p>12222222</p>
        </el-col>
        <el-col :span="8" style="margin-top:20px">
            <p>555555555555</p>
        </el-col>
    </el-row>

    
</template>

<script>
export default{
    name:'Exam',
    data(){
        return {
            tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
        }
    }   
}
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

