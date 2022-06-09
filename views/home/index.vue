<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top:20px">
            <el-card shadow="hover">
                <div class="user">
                    <img :src="userImg"/>
                    <div class="userInfo">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间：<span>1111-11-11</span></p>
                    <p>上次登录地点：<span>山东-济南</span></p>
                </div>
            </el-card>
            <p>12222222</p>
        </el-col>
        <el-col :span="8" style="margin-top:20px">
            <p>555555555555</p>
        </el-col>
    </el-row>
</template>

<script>
import {getMenu} from '../../api/data.js'
export default{
    name:'home',
    data(){
        return {
            userImg:require('../../src/assets/images/userImg.jpg')
        }
    },
    mounted(){
        getMenu().then(res=>{
            console.log(res)
        })
    }   
}
</script>