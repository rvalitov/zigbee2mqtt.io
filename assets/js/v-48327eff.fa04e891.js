"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[78249],{591358:(t,e,d)=>{d.r(e),d.d(e,{data:()=>a});const a=JSON.parse('{"key":"v-48327eff","path":"/devices/ZB-TTS01.html","title":"Easyiot ZB-TTS01 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Easyiot ZB-TTS01 control via MQTT","description":"Integrate your ZB-TTS01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-01-11T16:23:11.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"输入内容","slug":"输入内容","link":"#输入内容","children":[]},{"level":3,"title":"1.1 文本标记功能","slug":"_1-1-文本标记功能","link":"#_1-1-文本标记功能","children":[]},{"level":3,"title":"1.2 文本分析功能","slug":"_1-2-文本分析功能","link":"#_1-2-文本分析功能","children":[]}]}],"git":{"updatedTime":1706468170000},"filePathRelative":"devices/ZB-TTS01.md"}')},155672:(t,e,d)=>{d.r(e),d.d(e,{default:()=>p});var a=d(166252);const r=(0,a._)("h1",{id:"easyiot",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#easyiot","aria-hidden":"true"},"#"),(0,a.Uk)(" Easyiot")],-1),i=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"ZB-TTS01")],-1),l=(0,a._)("td",null,"Vendor",-1),h=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"This is a text-to-speech controller that can convert GB2312 Chinese, letters, and numbers into Chinese speech.")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"send tts, last received status, linkquality")],-1),o=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZB-TTS01.jpg",alt:"ZB-TTS01"})])],-1),u=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="输入内容" tabindex="-1"><a class="header-anchor" href="#输入内容" aria-hidden="true">#</a> 输入内容</h3><table><thead><tr><th></th><th>格式</th><th>备注</th></tr></thead><tbody><tr><td>普通文本</td><td>中文-GB2312编码 英文-26个英文字母 数字-0~9</td><td>例：“谢谢使用”</td></tr><tr><td>调节音量</td><td>[v*]</td><td>*代表数字0~9，比如设置音量为5发送内容为：[v5]，下发必须包含小写方括号</td></tr><tr><td>调节语速</td><td>[s*]</td><td>参考调节音量</td></tr><tr><td>调节语调</td><td>[t*]</td><td>参考调节音量</td></tr><tr><td>播放内置铃声</td><td>ring_*</td><td>*代表数字1-5，比如ring_1</td></tr><tr><td>信息提示音</td><td>message_*</td><td>*代表数字1-5，比如message _1</td></tr><tr><td>警示音</td><td>alert_*</td><td>*代表数字1-5，比如alert _1</td></tr></tbody></table><h3 id="_1-1-文本标记功能" tabindex="-1"><a class="header-anchor" href="#_1-1-文本标记功能" aria-hidden="true">#</a> 1.1 文本标记功能</h3><p>智能解析常见标点符号，常见多音字、数字。支持常用英文单位（需小写）、特殊数字发音。单句无停顿标点符号句子长度超过50 字将自动切断。</p><h3 id="_1-2-文本分析功能" tabindex="-1"><a class="header-anchor" href="#_1-2-文本分析功能" aria-hidden="true">#</a> 1.2 文本分析功能</h3><p>支持文本标记，可标记多音字发音、数字发音、短停顿。</p><h4 id="_1-2-1-多音字标记方式" tabindex="-1"><a class="header-anchor" href="#_1-2-1-多音字标记方式" aria-hidden="true">#</a> 1.2.1 多音字标记方式</h4><p>[=*] 标记前一汉字的拼音</p><p>例：空调[=tiao2]调[=tiao2]到三十度</p><p>汉字拼音解析为：kong1 tiao2 tiao2 dao4 san1 shi2 du4</p><p>其中，拼音格式为拼音+声调，声调数值范围1-5，分别代表（1:阴平2:阳平3:上声4:去声5:轻声）。拼音中ü用字母v 代替，字母均为小写</p><h4 id="_1-2-2-数字标记方式" tabindex="-1"><a class="header-anchor" href="#_1-2-2-数字标记方式" aria-hidden="true">#</a> 1.2.2 数字标记方式</h4><p>[n*]，指定该标记后的数字发音方式，*为1时按数字发音，*为2时按数值发音，*为3时按电话号码格式发音。该标记后必须跟数字才能有效转换</p><table><thead><tr><th>标记文本</th><th>播放效果</th></tr></thead><tbody><tr><td>共消费[n2]100元</td><td>共消费一百元</td></tr><tr><td>请拨打电话[n1]95511</td><td>请拨打电话九五五一一</td></tr><tr><td>手机号码[n3]18812341121</td><td>手机号码幺八八幺二三四幺幺二幺</td></tr></tbody></table><h4 id="_1-2-3-短停标记方式" tabindex="-1"><a class="header-anchor" href="#_1-2-3-短停标记方式" aria-hidden="true">#</a> 1.2.3 短停标记方式</h4><p>[w0]，指定该位置做短暂停顿。</p><p>例：欢迎使用[w0]深圳市知易科技有限公司的语音喇叭。</p><p>If you have additional technical problems, please email Technical support at support@easyiot.tech</p>',19),c={},p=(0,d(983744).Z)(c,[["render",function(t,e){const d=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),r,(0,a._)("table",null,[i,(0,a._)("tbody",null,[n,(0,a._)("tr",null,[l,(0,a._)("td",null,[(0,a.Wm)(d,{to:"/supported-devices/#v=Easyiot"},{default:(0,a.w5)((()=>[(0,a.Uk)("Easyiot")])),_:1})])]),h,s,o])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,a.kq)(" Notes END: Do not edit below this line ")])}]])}}]);