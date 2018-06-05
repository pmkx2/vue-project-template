<template>
    <div>

        <!-- 控制按钮 -->
        <el-row>
            <el-col :span="10" align="left">
                <el-input v-model="queryInfo.search" placeholder="搜索内容">
                </el-input>
            </el-col>
            <el-col :span="14" align="right">
                <el-button>高级筛选</el-button>
            </el-col>
        </el-row>
        <!-- / 控制按钮 -->

        <!-- table -->
        <el-table
            v-loading="isLoading"
            class="mt-10"
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="120">
            </el-table-column>
            <el-table-column
                show-overflow-tooltip
                prop="address"
                label="地址">
            </el-table-column>
            <el-table-column
                prop="date"
                label="日期"
                width="120">
            </el-table-column>
            <el-table-column
                label="状态"
                width="100">
                <template slot-scope="scope">
                    <el-tag
                        v-if="state[scope.row.state]"
                        :type="state[scope.row.state].cls">
                        {{ state[scope.row.state].text }}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column
                label="操作"
                width="160">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="editInfo(scope.$index, scope.row)">
                        编辑
                    </el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="deleteInfo(scope.$index, scope.row)">
                        删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- / table -->

        <!-- 分页 -->
        <el-row class="mt-20">
            <el-col :span="24" align="right">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="100">
                </el-pagination>
            </el-col>
        </el-row>
        <!-- / 分页 -->

    </div>
</template>

<style src="./normal.scss" lang="scss" scoped></style>
