<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue';
import { useStyleStore } from '../../store/style';
import { ElInputNumber, ElSelect, ElOption, ElText, ElColorPicker } from 'element-plus';

const style_store = useStyleStore();

const fonts = [
    {
        value: '楷体',
        label: '楷体'
    },
    {
        value: '宋体',
        label: '宋体'
    },
    {
        value: '仿宋',
        label: '仿宋'
    },
    {
        value: '黑体',
        label: '黑体'
    },
];

const font_size = ref(0);

const font_weight = ref(0);

const line_height = ref(0);

const font_family = ref("");

const bg_color = ref("");

const font_color = ref("");

const paragraph_spacing = ref(0);

const page_padding = ref(5);

watch(font_size, () => {
    style_store.set_font_size(font_size.value);
    style_store.save();
})
watch(font_weight, () => {
    style_store.set_font_weight(font_weight.value);
    style_store.save();
})
watch(line_height, () => {
    style_store.set_line_height(line_height.value);
    style_store.save();
})
watch(font_family, () => {
    style_store.set_font_family(font_family.value);
    style_store.save();
})
watch(bg_color, () => {
    style_store.set_bg_color(bg_color.value);
    style_store.save();
})
watch(font_color, () => {
    style_store.set_font_color(font_color.value);
    style_store.save();
})
watch(paragraph_spacing, () => {
    style_store.set_paragraph_spacing(paragraph_spacing.value);
    style_store.save();
})
watch(page_padding, () => {
    style_store.set_page_padding(page_padding.value);
    style_store.save();
})


onBeforeMount(() => {
    font_size.value = style_store.font_size;
    font_family.value = style_store.font_family;
    font_weight.value = style_store.font_weight;
    line_height.value = style_store.line_height;
    bg_color.value = style_store.bg_color;
    font_color.value = style_store.font_color;
    paragraph_spacing.value = style_store.paragraph_spacing;
    page_padding.value = style_store.page_padding;
});

</script>

<template>
    <div class="Setting">
        <div class="title">设置</div>
        <div class="set_item">
            <div>
                <el-text>字体大小:</el-text>
                <el-input-number v-model="font_size" :min="8" :max="200" size="small" />
            </div>
            <div>
                <el-text>字体粗细:</el-text>
                <el-input-number v-model="font_weight" :min="100" :max="900" :step="100" step-strictly size="small" />
            </div>
            <div>
                <el-text>字体行高:</el-text>
                <el-input-number v-model="line_height" :min="2" :max="200" :step="1" step-strictly size="small" />
            </div>
            <div>
                <el-text>正文字体:</el-text>
                <el-select v-model="font_family" placeholder="选择字体" size="small">
                    <el-option v-for="item in fonts" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>
            <div>
                <el-text>背景颜色:</el-text>
                <el-color-picker v-model="bg_color" size="small" />
            </div>
            <div>
                <el-text>字体颜色:</el-text>
                <el-color-picker v-model="font_color" size="small" />
            </div>
            <div>
                <el-text>段落间距:</el-text>
                <el-input-number v-model="paragraph_spacing" :min="0" :max="60" :step="1" step-strictly size="small" />
            </div>
            <div>
                <el-text>页面内边距(%):</el-text>
                <el-input-number v-model="page_padding" :min="0" :max="40" :step="1" step-strictly size="small" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.Setting {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--base-bgc);

    .title {
        font-size: 16px;
        margin: 5px 0;
        color: #757575;
        height: 25px;
        text-align: center;
    }

    .set_item {
        display: flex;
        flex-direction: column;
        padding: 10px;

        .el-text {
            margin-right: 5px;
        }

        &>div {
            margin: 10px 0;
            display: flex;
            white-space: nowrap;
        }
    }
}
</style>