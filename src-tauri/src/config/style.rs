use serde::{Deserialize, Serialize};

use super::{get_config, set_config};

#[derive(Serialize, Deserialize, Debug)]
pub struct StyleInfo {
    pub font_size: u32,      //字体大小
    pub font_weight: u32,    //字体粗细
    pub line_height: u32,    //行高,除以10
    pub font_family: String, //字体
    #[serde(default = "default_bg_color")]
    pub bg_color: String,    //背景颜色
    #[serde(default = "default_font_color")]
    pub font_color: String,  //字体颜色
    #[serde(default = "default_paragraph_spacing")]
    pub paragraph_spacing: u32, //段落间距
    #[serde(default = "default_page_padding")]
    pub page_padding: u32, //页面内边距（百分比）
}

fn default_bg_color() -> String {
    "#ffffff".to_string()
}

fn default_font_color() -> String {
    "#000000".to_string()
}

fn default_paragraph_spacing() -> u32 {
    15
}

fn default_page_padding() -> u32 {
    5
}

impl Default for StyleInfo {
    fn default() -> Self {
        Self {
            font_size: 16,
            font_weight: 400,
            line_height: 16,
            font_family: "楷体".to_string(),
            bg_color: default_bg_color(),
            font_color: default_font_color(),
            paragraph_spacing: default_paragraph_spacing(),
            page_padding: default_page_padding(),
        }
    }
}

#[tauri::command]
pub fn cfg_app_get_style() -> StyleInfo {
    let cfg = get_config();
    cfg.styleinfo
}

#[tauri::command]
pub fn cfg_app_set_style(style: StyleInfo) {
    let mut cfg = get_config();
    cfg.styleinfo = style;
    set_config(cfg);
}
