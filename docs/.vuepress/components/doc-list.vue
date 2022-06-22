<template>
    <div class="list">
        <div class="item" :key="item.path" v-for="(item) in docList" @click="jump(item)">
            <div class="title">{{ item.title }}</div>
            <div class="content">{{ item.content }}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'doc-list',
    data: function () {
        return {
            docList: []
        }
    },
    mounted() {
        this.docList = this.$site.pages.filter(item => {
            return item.path !== '/' && item.title
        }).map(item => {
            return {
                title: item?.title || '',
                content: item?.frontmatter?.content || '',
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
.item {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 10px;
    min-height: 100px;
    cursor: pointer;
}

.item>.title {
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1;
    height: 20px;
    padding-bottom: 20px;
    color: #2e3135;
}

.item>content {
    color: #5b6169;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    width: 100%;
}
</style>