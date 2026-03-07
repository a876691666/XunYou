import { invoke } from '@tauri-apps/api/core';
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStyleStore = defineStore('style', () => {
    //字体大小
    const font_size = ref(16);
    //字体粗细
    const font_weight = ref(400);
    //字体
    const font_family = ref("宋体");
    //行高
    const line_height = ref(16);
    //背景颜色
    const bg_color = ref("#ffffff");
    //字体颜色
    const font_color = ref("#000000");
    //段落间距
    const paragraph_spacing = ref(15);
    //渲染样式
    const style = ref({
        fontSize: font_size.value + 'px',
        lineHeight: line_height.value / 10 + 'em',
        backgroundSize: '15px ' + line_height.value / 10 + 'em',
        fontFamily: font_family.value,
        fontWeight: font_weight.value,
        backgroundColor: bg_color.value,
        color: font_color.value,
        '--paragraph-spacing': paragraph_spacing.value + 'px',
    });

    function set(fsize: number, fweight: number, ffamily: string, lheight: number,
        bgc?: string, fc?: string, ps?: number) {
        font_size.value = fsize;
        font_weight.value = fweight;
        font_family.value = ffamily;
        line_height.value = lheight;
        if (bgc !== undefined) bg_color.value = bgc;
        if (fc !== undefined) font_color.value = fc;
        if (ps !== undefined) paragraph_spacing.value = ps;
        render();
    }

    function set_font_size(size: number) {
        font_size.value = size;
        render();
    }

    function set_font_family(family: string) {
        font_family.value = family;
        render();
    }

    function set_font_weight(weight: number) {
        font_weight.value = weight;
        render();
    }

    function set_line_height(height: number) {
        line_height.value = height;
        render();
    }

    function set_bg_color(color: string) {
        bg_color.value = color;
        render();
    }

    function set_font_color(color: string) {
        font_color.value = color;
        render();
    }

    function set_paragraph_spacing(spacing: number) {
        paragraph_spacing.value = spacing;
        render();
    }

    function render() {
        style.value = {
            fontSize: font_size.value + 'px',
            lineHeight: line_height.value / 10 + 'em',
            backgroundSize: '15px ' + line_height.value / 10 + 'em',
            fontFamily: font_family.value,
            fontWeight: font_weight.value,
            backgroundColor: bg_color.value,
            color: font_color.value,
            '--paragraph-spacing': paragraph_spacing.value + 'px',
        };
    }

    function save() {
        invoke("cfg_app_set_style", {
            style: {
                font_size: font_size.value,
                font_weight: font_weight.value,
                line_height: line_height.value,
                font_family: font_family.value,
                bg_color: bg_color.value,
                font_color: font_color.value,
                paragraph_spacing: paragraph_spacing.value,
            }
        });
    }

    return {
        font_family, font_size, font_weight, line_height,
        bg_color, font_color, paragraph_spacing,
        style, set,
        set_font_size, set_font_family, set_font_weight, set_line_height,
        set_bg_color, set_font_color, set_paragraph_spacing,
        save
    }
})