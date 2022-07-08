<template>
    <div class="list">
        <div class="item" :key="item.path" v-for="(item) in docList" @click="jump(item)">
            <div class="title">{{ item.title }}</div>
            <div class="content">{{ item.content }}</div>
        </div>
    </div>
</template>
<script>
import list from '../docList.ts'
export default {
    name: 'DocList',
    data: function () {
        return {
            docList: []
        }
    },
    mounted() {
        this.docList = list.map(item => {
            return {
                title: item?.title || '',
                content: item?.desc || '',
                path: item?.path || ''
            }
        })
    },
    methods: {
        jump(item) {
            if (item?.path) {
                this.$router.push(item.path)
            }
        }
    }
}
</script>

<style>
.list {
    width: 100vw;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 1rem;
    box-sizing: border-box;
}

.item {
    margin-bottom: 1rem;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    padding: 1.5rem;
    height: 90px;
    cursor: pointer;
}

.item:first-child {
    /* margin-top: 0; */
}

.item:hover {
    background: rgba(169, 205, 210, 0.1);
}

.item>.title {
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1;
    height: 1.4rem;
    padding-bottom: 1.4rem;
    color: #2e3135;
}

.item>.content {
    color: #62656a;
    font-size: 1rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    width: 100%;
}

@media screen and (min-width: 720px) {
    .list {
        margin-top: 40px;
    }
}
</style>