import{_ as ee,e as E}from"./monaco-B2601pel.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var T;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(T||(T={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(N||(N={}));var L;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(L||(L={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=["user","model","function","system"];var x;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(x||(x={}));var P;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(P||(P={}));var D;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(D||(D={}));var k;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(k||(k={}));var I;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.OTHER="OTHER"})(I||(I={}));var K;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(K||(K={}));var B;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(B||(B={}));var U;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(U||(U={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class _ extends f{constructor(t,n){super(t),this.response=n}}class J extends f{constructor(t,n,s,o){super(t),this.status=n,this.statusText=s,this.errorDetails=o}}class g extends f{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te="https://generativelanguage.googleapis.com",ne="v1beta",se="0.21.0",oe="genai-js";var v;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(v||(v={}));class ie{constructor(t,n,s,o,i){this.model=t,this.task=n,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var t,n;const s=((t=this.requestOptions)===null||t===void 0?void 0:t.apiVersion)||ne;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||te}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function re(e){const t=[];return e!=null&&e.apiClient&&t.push(e.apiClient),t.push(`${oe}/${se}`),t.join(" ")}async function ae(e){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",re(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let s=(t=e.requestOptions)===null||t===void 0?void 0:t.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new g(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new g(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new g(`Header name ${o} can only be set using the apiClient field`);n.append(o,i)}}return n}async function ce(e,t,n,s,o,i){const r=new ie(e,t,n,s,i);return{url:r.toString(),fetchOptions:Object.assign(Object.assign({},fe(i)),{method:"POST",headers:await ae(r),body:o})}}async function w(e,t,n,s,o,i={},r=fetch){const{url:a,fetchOptions:l}=await ce(e,t,n,s,o,i);return le(a,l,r)}async function le(e,t,n=fetch){let s;try{s=await n(e,t)}catch(o){de(o,e)}return s.ok||await ue(s,e),s}function de(e,t){let n=e;throw e instanceof J||e instanceof g||(n=new f(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack),n}async function ue(e,t){let n="",s;try{const o=await e.json();n=o.error.message,o.error.details&&(n+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new J(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${n}`,e.status,e.statusText,s)}function fe(e){const t={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const n=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),A(e.candidates[0]))throw new _(`${p(e)}`,e);return he(e)}else if(e.promptFeedback)throw new _(`Text not available. ${p(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),A(e.candidates[0]))throw new _(`${p(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),F(e)[0]}else if(e.promptFeedback)throw new _(`Function call not available. ${p(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),A(e.candidates[0]))throw new _(`${p(e)}`,e);return F(e)}else if(e.promptFeedback)throw new _(`Function call not available. ${p(e)}`,e)},e}function he(e){var t,n,s,o;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const r of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)r.text&&i.push(r.text),r.executableCode&&i.push("\n```"+r.executableCode.language+`
`+r.executableCode.code+"\n```\n"),r.codeExecutionResult&&i.push("\n```\n"+r.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function F(e){var t,n,s,o;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const r of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)r.functionCall&&i.push(r.functionCall);if(i.length>0)return i}const pe=[I.RECITATION,I.SAFETY,I.LANGUAGE];function A(e){return!!e.finishReason&&pe.includes(e.finishReason)}function p(e){var t,n,s;let o="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)o+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(o+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((s=e.candidates)===null||s===void 0)&&s[0]){const i=e.candidates[0];A(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function S(e){return this instanceof S?(this.v=e,this):new S(e)}function ge(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(e,t||[]),o,i=[];return o={},r("next"),r("throw"),r("return"),o[Symbol.asyncIterator]=function(){return this},o;function r(d){s[d]&&(o[d]=function(c){return new Promise(function(u,C){i.push([d,c,u,C])>1||a(d,c)})})}function a(d,c){try{l(s[d](c))}catch(u){y(i[0][3],u)}}function l(d){d.value instanceof S?Promise.resolve(d.value.v).then(h,m):y(i[0][2],d)}function h(d){a("next",d)}function m(d){a("throw",d)}function y(d,c){d(c),i.shift(),i.length&&a(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function me(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=ve(t),[s,o]=n.tee();return{stream:Ee(s),response:ye(o)}}async function ye(e){const t=[],n=e.getReader();for(;;){const{done:s,value:o}=await n.read();if(s)return b(Ce(t));t.push(o)}}function Ee(e){return ge(this,arguments,function*(){const n=e.getReader();for(;;){const{value:s,done:o}=yield S(n.read());if(o)break;yield yield S(b(s))}})}function ve(e){const t=e.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return t.read().then(({value:r,done:a})=>{if(a){if(o.trim()){s.error(new f("Failed to parse stream"));return}s.close();return}o+=r;let l=o.match(G),h;for(;l;){try{h=JSON.parse(l[1])}catch{s.error(new f(`Error parsing JSON response: "${l[1]}"`));return}s.enqueue(h),o=o.substring(l[0].length),l=o.match(G)}return i()})}}})}function Ce(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const s of e){if(s.candidates)for(const o of s.candidates){const i=o.index;if(n.candidates||(n.candidates=[]),n.candidates[i]||(n.candidates[i]={index:o.index}),n.candidates[i].citationMetadata=o.citationMetadata,n.candidates[i].groundingMetadata=o.groundingMetadata,n.candidates[i].finishReason=o.finishReason,n.candidates[i].finishMessage=o.finishMessage,n.candidates[i].safetyRatings=o.safetyRatings,o.content&&o.content.parts){n.candidates[i].content||(n.candidates[i].content={role:o.content.role||"user",parts:[]});const r={};for(const a of o.content.parts)a.text&&(r.text=a.text),a.functionCall&&(r.functionCall=a.functionCall),a.executableCode&&(r.executableCode=a.executableCode),a.codeExecutionResult&&(r.codeExecutionResult=a.codeExecutionResult),Object.keys(r).length===0&&(r.text=""),n.candidates[i].content.parts.push(r)}}s.usageMetadata&&(n.usageMetadata=s.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t,n,s){const o=await w(t,v.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),s);return me(o)}async function W(e,t,n,s){const i=await(await w(t,v.GENERATE_CONTENT,e,!1,JSON.stringify(n),s)).json();return{response:b(i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function O(e){let t=[];if(typeof e=="string")t=[{text:e}];else for(const n of e)typeof n=="string"?t.push({text:n}):t.push(n);return _e(t)}function _e(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,o=!1;for(const i of e)"functionResponse"in i?(n.parts.push(i),o=!0):(t.parts.push(i),s=!0);if(s&&o)throw new f("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new f("No content is provided for sending chat message.");return s?t:n}function Ie(e,t){var n;let s={model:t==null?void 0:t.model,generationConfig:t==null?void 0:t.generationConfig,safetySettings:t==null?void 0:t.safetySettings,tools:t==null?void 0:t.tools,toolConfig:t==null?void 0:t.toolConfig,systemInstruction:t==null?void 0:t.systemInstruction,cachedContent:(n=t==null?void 0:t.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const o=e.generateContentRequest!=null;if(e.contents){if(o)throw new g("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=e.contents}else if(o)s=Object.assign(Object.assign({},s),e.generateContentRequest);else{const i=O(e);s.contents=[i]}return{generateContentRequest:s}}function j(e){let t;return e.contents?t=e:t={contents:[O(e)]},e.systemInstruction&&(t.systemInstruction=z(e.systemInstruction)),t}function Se(e){return typeof e=="string"||Array.isArray(e)?{content:O(e)}:e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Oe={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function we(e){let t=!1;for(const n of e){const{role:s,parts:o}=n;if(!t&&s!=="user")throw new f(`First content should be with role 'user', got ${s}`);if(!M.includes(s))throw new f(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(M)}`);if(!Array.isArray(o))throw new f("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new f("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const a of o)for(const l of H)l in a&&(i[l]+=1);const r=Oe[s];for(const a of H)if(!r.includes(a)&&i[a]>0)throw new f(`Content with role '${s}' can't contain '${a}' part`);t=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y="SILENT_ERROR";class Ae{constructor(t,n,s,o={}){this.model=n,this.params=s,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,s!=null&&s.history&&(we(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,n={}){var s,o,i,r,a,l;await this._sendPromise;const h=O(t),m={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(r=this.params)===null||r===void 0?void 0:r.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,h]},y=Object.assign(Object.assign({},this._requestOptions),n);let d;return this._sendPromise=this._sendPromise.then(()=>W(this._apiKey,this.model,m,y)).then(c=>{var u;if(c.response.candidates&&c.response.candidates.length>0){this._history.push(h);const C=Object.assign({parts:[],role:"model"},(u=c.response.candidates)===null||u===void 0?void 0:u[0].content);this._history.push(C)}else{const C=p(c.response);C&&console.warn(`sendMessage() was unsuccessful. ${C}. Inspect response object for details.`)}d=c}),await this._sendPromise,d}async sendMessageStream(t,n={}){var s,o,i,r,a,l;await this._sendPromise;const h=O(t),m={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(r=this.params)===null||r===void 0?void 0:r.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,h]},y=Object.assign(Object.assign({},this._requestOptions),n),d=V(this._apiKey,this.model,m,y);return this._sendPromise=this._sendPromise.then(()=>d).catch(c=>{throw new Error(Y)}).then(c=>c.response).then(c=>{if(c.candidates&&c.candidates.length>0){this._history.push(h);const u=Object.assign({},c.candidates[0].content);u.role||(u.role="model"),this._history.push(u)}else{const u=p(c);u&&console.warn(`sendMessageStream() was unsuccessful. ${u}. Inspect response object for details.`)}}).catch(c=>{c.message!==Y&&console.error(c)}),d}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(e,t,n,s){return(await w(t,v.COUNT_TOKENS,e,!1,JSON.stringify(n),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function be(e,t,n,s){return(await w(t,v.EMBED_CONTENT,e,!1,JSON.stringify(n),s)).json()}async function Te(e,t,n,s){const o=n.requests.map(r=>Object.assign(Object.assign({},r),{model:t}));return(await w(t,v.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,n,s={}){this.apiKey=t,this._requestOptions=s,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=z(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(t,n={}){var s;const o=j(t),i=Object.assign(Object.assign({},this._requestOptions),n);return W(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}async generateContentStream(t,n={}){var s;const o=j(t),i=Object.assign(Object.assign({},this._requestOptions),n);return V(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}startChat(t){var n;return new Ae(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},t),this._requestOptions)}async countTokens(t,n={}){const s=Ie(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),n);return Re(this.apiKey,this.model,s,o)}async embedContent(t,n={}){const s=Se(t),o=Object.assign(Object.assign({},this._requestOptions),n);return be(this.apiKey,this.model,s,o)}async batchEmbedContents(t,n={}){const s=Object.assign(Object.assign({},this._requestOptions),n);return Te(this.apiKey,this.model,t,s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new f("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new $(this.apiKey,t,n)}getGenerativeModelFromCachedContent(t,n,s){if(!t.name)throw new g("Cached content must contain a `name` field.");if(!t.model)throw new g("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const r of o)if(n!=null&&n[r]&&t[r]&&(n==null?void 0:n[r])!==t[r]){if(r==="model"){const a=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,l=t.model.startsWith("models/")?t.model.replace("models/",""):t.model;if(a===l)continue}throw new g(`Different value for "${r}" specified in modelParams (${n[r]}) and cachedContent (${t[r]})`)}const i=Object.assign(Object.assign({},n),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new $(this.apiKey,i,s)}}const Le="You are an expert code converter specializing in test automation frameworks.\n\n**Task**: Convert the following CodeceptJS test code to Pytest.\n\n**Key Conversion Rules**:\n\n1. **Imports & Setup**:\n   - CodeceptJS uses `Feature()` and `Scenario()` → Pytest uses `class Test*` or `def test_*()`\n   - Replace `I` object methods with appropriate Selenium/Playwright/Requests calls\n   - Import pytest and necessary libraries\n\n2. **Test Structure**:\n   - `Feature('name')` → Test class name or module docstring\n   - `Scenario('name', async ({ I }) => {})` → `def test_name(self):` or `async def test_name(self):`\n   - Remove async/await if not needed in Python\n\n3. **Common Method Mappings**:\n   - `I.amOnPage(url)` → `self.driver.get(url)` or `page.goto(url)`\n   - `I.click(locator)` → `self.driver.find_element(*locator).click()` or `page.click(locator)`\n   - `I.fillField(field, value)` → `self.driver.find_element(*field).send_keys(value)`\n   - `I.see(text)` → `assert text in self.driver.page_source`\n   - `I.dontSee(text)` → `assert text not in self.driver.page_source`\n   - `I.waitForElement(locator)` → `WebDriverWait(self.driver, 10).until(EC.presence_of_element_located(locator))`\n\n4. **Assertions**:\n   - CodeceptJS assertions → Python `assert` statements\n   - Use pytest's assertion introspection\n\n5. **Locators**:\n   - Convert CSS/XPath strings appropriately\n   - Use proper Selenium By locators or Playwright selectors\n\n**Input CodeceptJS Code**:\n```javascript\n{INPUT_CODE}\n```\n\n**Instructions**:\n- Provide ONLY the converted Pytest code\n- Include necessary imports\n- Maintain the same test logic and assertions\n- Use proper Python naming conventions (snake_case)\n- Add brief comments where conversion is non-obvious\n- Ensure the code is syntactically correct and runnable\n\n**Output** (provide ONLY the Python code, no explanations):",Me="You are an expert code converter specializing in test automation frameworks.\n\n**Task**: Convert the following Pytest test code to CodeceptJS.\n\n**Key Conversion Rules**:\n\n1. **Imports & Setup**:\n   - Pytest test functions/classes → CodeceptJS `Feature()` and `Scenario()`\n   - Replace Selenium/Playwright calls with `I` object methods\n   - Remove pytest imports\n\n2. **Test Structure**:\n   - `class Test*` or module docstring → `Feature('name')`\n   - `def test_name()` or `async def test_name()` → `Scenario('name', async ({ I }) => {})`\n   - Convert to async JavaScript\n\n3. **Common Method Mappings**:\n   - `driver.get(url)` or `page.goto(url)` → `I.amOnPage(url)`\n   - `driver.find_element(*locator).click()` or `page.click()` → `I.click(locator)`\n   - `driver.find_element(*field).send_keys(value)` → `I.fillField(field, value)`\n   - `assert text in page_source` → `I.see(text)`\n   - `assert text not in page_source` → `I.dontSee(text)`\n   - `WebDriverWait(...).until(...)` → `I.waitForElement(locator)`\n\n4. **Assertions**:\n   - Python `assert` statements → CodeceptJS `I.see()` or custom assertions\n   - Complex assertions may need `I.executeScript()`\n\n5. **Locators**:\n   - Convert Selenium By locators to CSS/XPath strings\n   - Use CodeceptJS locator format\n\n**Input Pytest Code**:\n```python\n{INPUT_CODE}\n```\n\n**Instructions**:\n- Provide ONLY the converted CodeceptJS code\n- Include Feature() declaration\n- Maintain the same test logic and assertions\n- Use proper JavaScript camelCase naming\n- Add brief comments where conversion is non-obvious\n- Ensure the code is syntactically correct and runnable\n\n**Output** (provide ONLY the JavaScript code, no explanations):";function xe(e,t){return(t==="codeceptjs-to-pytest"?Le:Me).replace("{INPUT_CODE}",e)}const X="gemini-1.5-flash";function Q(e){if(!e)throw new Error("API key is required");return new Ne(e)}function Pe(e){const t=/```(?:python|javascript|js|py)?\n?([\s\S]*?)```/g,n=[...e.matchAll(t)];return n.length>0?n[0][1].trim():e.trim()}function De(e){if(!e||e.trim().length===0)throw new Error("Input code cannot be empty")}async function Z(e,t,n){var s,o,i,r;try{if(De(e),!["codeceptjs-to-pytest","pytest-to-codeceptjs"].includes(t))throw new Error("Invalid conversion direction");const l=Q(n).getGenerativeModel({model:X}),h=xe(e,t),d=(await(await l.generateContent(h)).response).text(),c=Pe(d);if(!c)throw new Error("Conversion failed: empty response from AI");return c}catch(a){throw(s=a.message)!=null&&s.includes("API_KEY_INVALID")?new Error("Invalid API key. Please check your Gemini API key."):(o=a.message)!=null&&o.includes("QUOTA_EXCEEDED")?new Error("API quota exceeded. Please try again later or check your billing."):(i=a.message)!=null&&i.includes("SAFETY")?new Error("Content filtered by safety settings. Please modify your input code."):(r=a.message)!=null&&r.includes("timeout")?new Error("Request timeout. Please try again."):a}}async function ke(e){try{return(await(await Q(e).getGenerativeModel({model:X}).generateContent('Say "OK"')).response).text().length>0}catch{return!1}}const Ke=Object.freeze(Object.defineProperty({__proto__:null,convertCode:Z,testApiKey:ke},Symbol.toStringTag,{value:"Module"})),R="gemini_api_key";class Be{constructor(){this.modal=document.getElementById("apiKeyModal"),this.input=document.getElementById("apiKeyInput"),this.errorDiv=document.getElementById("apiKeyError"),this.successDiv=document.getElementById("apiKeySuccess"),this.banner=document.getElementById("apiKeyBanner")}open(){this.modal.classList.remove("hidden"),this.input.value=this.getApiKey()||"",this.clearMessages(),this.input.focus()}close(){this.modal.classList.add("hidden"),this.clearMessages()}async save(){const t=this.input.value.trim();if(!t)return this.showError("Please enter an API key"),!1;if(t.length<20)return this.showError("API key appears to be invalid (too short)"),!1;try{this.showSuccess("Testing API key...");const{testApiKey:n}=await ee(async()=>{const{testApiKey:o}=await Promise.resolve().then(()=>Ke);return{testApiKey:o}},void 0);return await n(t)?(localStorage.setItem(R,t),this.showSuccess("✅ API key saved successfully!"),this.updateBanner(),setTimeout(()=>{this.close()},1500),!0):(this.showError("Invalid API key. Please check and try again."),!1)}catch(n){return this.showError(`Error testing API key: ${n.message}`),!1}}getApiKey(){return localStorage.getItem(R)}hasApiKey(){const t=this.getApiKey();return t&&t.length>0}removeApiKey(){localStorage.removeItem(R),this.updateBanner()}showError(t){this.errorDiv.textContent=t,this.errorDiv.classList.remove("hidden"),this.successDiv.classList.add("hidden")}showSuccess(t){this.successDiv.textContent=t,this.successDiv.classList.remove("hidden"),this.errorDiv.classList.add("hidden")}clearMessages(){this.errorDiv.classList.add("hidden"),this.successDiv.classList.add("hidden")}updateBanner(){this.hasApiKey()?this.banner.classList.add("hidden"):this.banner.classList.remove("hidden")}init(){this.modal.addEventListener("click",t=>{t.target===this.modal&&this.close()}),this.input.addEventListener("keypress",t=>{t.key==="Enter"&&this.save()}),this.updateBanner()}}const Ue=`Feature('Login Tests');

Scenario('User can login with valid credentials', async ({ I }) => {
  I.amOnPage('/login');
  I.fillField('username', 'testuser@example.com');
  I.fillField('password', 'password123');
  I.click('Login');
  I.see('Welcome, Test User');
  I.seeInCurrentUrl('/dashboard');
});

Scenario('User cannot login with invalid credentials', async ({ I }) => {
  I.amOnPage('/login');
  I.fillField('username', 'invalid@example.com');
  I.fillField('password', 'wrongpassword');
  I.click('Login');
  I.see('Invalid credentials');
  I.dontSee('Welcome');
});`,Fe=`import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class TestLogin:
    @pytest.fixture(autouse=True)
    def setup(self):
        self.driver = webdriver.Chrome()
        yield
        self.driver.quit()
    
    def test_user_can_login_with_valid_credentials(self):
        """User can login with valid credentials"""
        self.driver.get('https://example.com/login')
        
        self.driver.find_element(By.NAME, 'username').send_keys('testuser@example.com')
        self.driver.find_element(By.NAME, 'password').send_keys('password123')
        self.driver.find_element(By.XPATH, '//button[text()="Login"]').click()
        
        assert 'Welcome, Test User' in self.driver.page_source
        assert '/dashboard' in self.driver.current_url
    
    def test_user_cannot_login_with_invalid_credentials(self):
        """User cannot login with invalid credentials"""
        self.driver.get('https://example.com/login')
        
        self.driver.find_element(By.NAME, 'username').send_keys('invalid@example.com')
        self.driver.find_element(By.NAME, 'password').send_keys('wrongpassword')
        self.driver.find_element(By.XPATH, '//button[text()="Login"]').click()
        
        assert 'Invalid credentials' in self.driver.page_source
        assert 'Welcome' not in self.driver.page_source`;class q{constructor(){this.inputEditor=null,this.outputEditor=null,this.currentDirection="codeceptjs-to-pytest",this.apiKeyModal=new Be,this.init()}async init(){try{this.apiKeyModal.init(),this.initEditors(),this.loadSampleCode(),this.setupKeyboardShortcuts(),console.log("✨ Code Converter initialized successfully")}catch(t){console.error("Error initializing app:",t),alert("Error initializing application. Please refresh the page.")}}initEditors(){E.defineTheme("custom-dark",{base:"vs-dark",inherit:!0,rules:[],colors:{"editor.background":"#0a0a14","editor.lineHighlightBackground":"#1a1a2e20","editorLineNumber.foreground":"#4a4a6a","editor.selectionBackground":"#667eea40"}}),this.inputEditor=E.create(document.getElementById("inputEditor"),{value:"",language:"javascript",theme:"custom-dark",fontSize:14,fontFamily:"'JetBrains Mono', 'Fira Code', 'Consolas', monospace",minimap:{enabled:!1},scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,lineNumbers:"on",renderWhitespace:"selection",bracketPairColorization:{enabled:!0}}),this.outputEditor=E.create(document.getElementById("outputEditor"),{value:"",language:"python",theme:"custom-dark",fontSize:14,fontFamily:"'JetBrains Mono', 'Fira Code', 'Consolas', monospace",minimap:{enabled:!1},scrollBeyondLastLine:!1,automaticLayout:!0,readOnly:!0,tabSize:4,lineNumbers:"on",renderWhitespace:"selection",bracketPairColorization:{enabled:!0}})}loadSampleCode(){this.currentDirection==="codeceptjs-to-pytest"?this.inputEditor.setValue(Ue):this.inputEditor.setValue(Fe),this.outputEditor.setValue('// Click "Convert Code" to see the converted output here...')}setDirection(t){this.currentDirection=t;const n=document.getElementById("codeceptjsToPytestBtn"),s=document.getElementById("pytestToCodeceptjsBtn"),o=document.getElementById("inputLabel"),i=document.getElementById("outputLabel"),r=document.getElementById("inputLang"),a=document.getElementById("outputLang");t==="codeceptjs-to-pytest"?(n.classList.add("active"),s.classList.remove("active"),o.textContent="Input (CodeceptJS)",i.textContent="Output (Pytest)",r.textContent="JavaScript",a.textContent="Python",E.setModelLanguage(this.inputEditor.getModel(),"javascript"),E.setModelLanguage(this.outputEditor.getModel(),"python")):(s.classList.add("active"),n.classList.remove("active"),o.textContent="Input (Pytest)",i.textContent="Output (CodeceptJS)",r.textContent="Python",a.textContent="JavaScript",E.setModelLanguage(this.inputEditor.getModel(),"python"),E.setModelLanguage(this.outputEditor.getModel(),"javascript")),this.loadSampleCode()}async convert(){const t=this.apiKeyModal.getApiKey();if(!t){alert("Please configure your Gemini API key first"),this.openApiKeyModal();return}const n=this.inputEditor.getValue().trim();if(!n){alert("Please enter some code to convert");return}try{this.setLoadingState(!0);const s=await Z(n,this.currentDirection,t);this.outputEditor.setValue(s),this.outputEditor.revealLine(1)}catch(s){console.error("Conversion error:",s),alert(`Conversion failed: ${s.message}`),this.outputEditor.setValue(`// Error: ${s.message}
// Please check your input code and API key.`)}finally{this.setLoadingState(!1)}}setLoadingState(t){const n=document.getElementById("convertBtn"),s=document.getElementById("convertBtnText"),o=document.getElementById("convertBtnSpinner");t?(n.disabled=!0,s.classList.add("hidden"),o.classList.remove("hidden")):(n.disabled=!1,s.classList.remove("hidden"),o.classList.add("hidden"))}clearInput(){this.inputEditor.setValue(""),this.inputEditor.focus()}async pasteFromClipboard(){try{const t=await navigator.clipboard.readText();this.inputEditor.setValue(t),this.inputEditor.focus()}catch{alert("Failed to paste from clipboard. Please paste manually (Cmd+V / Ctrl+V)")}}async copyOutput(){const t=this.outputEditor.getValue();if(!t||t.startsWith("//")){alert("No converted code to copy");return}try{await navigator.clipboard.writeText(t);const n=event.target.closest(".icon-btn"),s=n.textContent;n.textContent="✅ Copied!",setTimeout(()=>{n.textContent=s},2e3)}catch{alert("Failed to copy to clipboard. Please copy manually (Cmd+C / Ctrl+C)")}}downloadOutput(){const t=this.outputEditor.getValue();if(!t||t.startsWith("//")){alert("No converted code to download");return}const n=this.currentDirection==="codeceptjs-to-pytest"?"test_converted.py":"test_converted.js",s=new Blob([t],{type:"text/plain"}),o=URL.createObjectURL(s),i=document.createElement("a");i.href=o,i.download=n,i.click(),URL.revokeObjectURL(o)}openApiKeyModal(){this.apiKeyModal.open()}closeApiKeyModal(){this.apiKeyModal.close()}async saveApiKey(){await this.apiKeyModal.save()}setupKeyboardShortcuts(){document.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="Enter"&&(t.preventDefault(),this.convert()),(t.metaKey||t.ctrlKey)&&t.key==="k"&&(t.preventDefault(),this.openApiKeyModal())})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{window.app=new q}):window.app=new q;
