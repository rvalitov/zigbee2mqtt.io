"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[6699],{421933:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-a175024e","path":"/devices/ZM25R1.html","title":"Zemismart ZM25R1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Zemismart ZM25R1 control via MQTT","description":"Integrate your Zemismart ZM25R1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":null},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Upper stroke limit (enum)","slug":"upper-stroke-limit-enum","link":"#upper-stroke-limit-enum","children":[]},{"level":3,"title":"Middle stroke limit (enum)","slug":"middle-stroke-limit-enum","link":"#middle-stroke-limit-enum","children":[]},{"level":3,"title":"Lower stroke limit (enum)","slug":"lower-stroke-limit-enum","link":"#lower-stroke-limit-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1706468170000},"filePathRelative":"devices/ZM25R1.md"}')},863720:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var i=o(166252);const l=(0,i._)("h1",{id:"zemismart-zm25r1",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#zemismart-zm25r1","aria-hidden":"true"},"#"),(0,i.Uk)(" Zemismart ZM25R1")],-1),d=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"ZM25R1")],-1),r=(0,i._)("td",null,"Vendor",-1),a=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Tubular motor")],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"cover (state, position), upper_stroke_limit, middle_stroke_limit, lower_stroke_limit, linkquality")],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZM25R1.jpg",alt:"Zemismart ZM25R1"})])],-1),c=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),h=(0,i.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="upper-stroke-limit-enum" tabindex="-1"><a class="header-anchor" href="#upper-stroke-limit-enum" aria-hidden="true">#</a> Upper stroke limit (enum)</h3><p>Reset / Set the upper stroke limit. Value can be found in the published state on the <code>upper_stroke_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;upper_stroke_limit&quot;: NEW_VALUE}</code>. The possible values are: <code>SET</code>, <code>RESET</code>.</p><h3 id="middle-stroke-limit-enum" tabindex="-1"><a class="header-anchor" href="#middle-stroke-limit-enum" aria-hidden="true">#</a> Middle stroke limit (enum)</h3><p>Reset / Set the middle stroke limit. Value can be found in the published state on the <code>middle_stroke_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;middle_stroke_limit&quot;: NEW_VALUE}</code>. The possible values are: <code>SET</code>, <code>RESET</code>.</p><h3 id="lower-stroke-limit-enum" tabindex="-1"><a class="header-anchor" href="#lower-stroke-limit-enum" aria-hidden="true">#</a> Lower stroke limit (enum)</h3><p>Reset / Set the lower stroke limit. Value can be found in the published state on the <code>lower_stroke_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lower_stroke_limit&quot;: NEW_VALUE}</code>. The possible values are: <code>SET</code>, <code>RESET</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),m={},p=(0,o(983744).Z)(m,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),l,(0,i._)("table",null,[d,(0,i._)("tbody",null,[s,(0,i._)("tr",null,[r,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Zemismart"},{default:(0,i.w5)((()=>[(0,i.Uk)("Zemismart")])),_:1})])]),a,n,u])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),c,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);