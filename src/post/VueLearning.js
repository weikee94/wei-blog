import React from 'react';
import '../post/vueLearning.scss';
const ReactMarkdown = require('react-markdown');

const sectionOne = '`<p v-text="title"></p>`';
const sectionTwo = '`<p v-html="title"></p>`';
const sectionThree = '`<p v-if="isShow"></p>`';
const sectionFour = '`<p v-show="isShow"></p>`';
const sectionFive ='<ul>\n <li v-for="item in arr">\n  {{ item }}\n </li>\n</ul>';

const sectionSix = '<p v-on:click="speak">click Me</p>\n<p @click="speak">second method</p>';
const sectionSeven = '<p class="view" v-bind:class="{active:isActive}">\n {{msg}}\n</p>';

const sectionEight = '<input v-model="content" />\n<p>{{ content }}</p>';

const sectionNine = '<script type="text/javascript">\n var app = new Vue({\n  el: ".view",\n  data: {},\n  methods: {},\n  computed: {},\n  watch: {}\n })\n</script>';

const VueLearning = () => {
    return (
        <div>
            <div className="sectionOne">
                数据渲染
                <figure class="highlight">
                    <figcaption>
                        <span className="title">v-text</span>
                        <a className="file">.vue</a>
                    </figcaption>
                    <table>
                        <tbody><tr>
                            <td className="code">
                                <pre>
                                    {/* <span className="line"><span className="keyword">print</span>
                                    <span className="string">"Hello World!"</span></span><br />
                                    <span className="line">=&gt; "Hello World!"</span><br /> */}
                                    <ReactMarkdown source={sectionOne} />
                                </pre>
                            </td>
                        </tr></tbody>
                    </table>
                </figure>
                <figure class="highlight">
                    <figcaption>
                        <span className="title">v-html</span>
                        <a className="file">.vue</a>
                    </figcaption>
                    <table>
                        <tbody><tr>
                            <td className="code">
                                <pre>
                                    {/* <span className="line"><span className="keyword">print</span>
                                    <span className="string">"Hello World!"</span></span><br />
                                    <span className="line">=&gt; "Hello World!"</span><br /> */}
                                    <ReactMarkdown source={sectionTwo} />
                                </pre>
                            </td>
                        </tr></tbody>
                    </table>
                </figure>
            </div>

            <div className="sectionTwo">
                控制模块显示
                <figure class="highlight">
                    <figcaption>
                        <span className="title">v-if</span>
                        <a className="file">.vue</a>
                    </figcaption>
                    <table>
                        <tbody><tr>
                            <td className="code">
                                <pre>
                                    {/* <span className="line"><span className="keyword">print</span>
                                    <span className="string">"Hello World!"</span></span><br />
                                    <span className="line">=&gt; "Hello World!"</span><br /> */}
                                    <ReactMarkdown source={sectionThree} />
                                </pre>
                            </td>
                        </tr></tbody>
                    </table>
                </figure>
                <figure class="highlight">
                    <figcaption>
                        <span className="title">v-show</span>
                        <a className="file">.vue</a>
                    </figcaption>
                    <table>
                        <tbody><tr>
                            <td className="code">
                                <pre>
                                    {/* <span className="line"><span className="keyword">print</span>
                                    <span className="string">"Hello World!"</span></span><br />
                                    <span className="line">=&gt; "Hello World!"</span><br /> */}
                                    <ReactMarkdown source={sectionFour} />
                                </pre>
                            </td>
                        </tr></tbody>
                    </table>
                </figure>
            </div>

            <div className="sectionThree">
                渲染列表
                <figure class="highlight">
                    <figcaption>
                        <span className="title">v-for</span>
                        <a className="file">.vue</a>
                    </figcaption>
                    <table>
                        <tbody><tr>
                            <td className="code">
                                <pre>
                                    {/* <span className="line"><span className="keyword">print</span>
                                    <span className="string">"Hello World!"</span></span><br />
                                    <span className="line">=&gt; "Hello World!"</span><br /> */}
                                    <ReactMarkdown source={sectionFive} />
                                </pre>
                            </td>
                        </tr></tbody>
                    </table>
                </figure>
            </div>

            <div className="sectionFour">
                事件绑定
                <figure class="highlight">
                    <figcaption>
                        <span className="title">v-on @</span>
                        <a className="file">.vue</a>
                    </figcaption>
                    <table>
                        <tbody><tr>
                            <td className="code">
                                <pre>
                                    <ReactMarkdown source={sectionSix} />
                                </pre>
                            </td>
                        </tr></tbody>
                    </table>
                </figure>
            </div>

            <div className="sectionFive">
                样式绑定
                <figure class="highlight">
                    <figcaption>
                        <span className="title">v-bind</span>
                        <a className="file">.vue</a>
                    </figcaption>
                    <table>
                        <tbody><tr>
                            <td className="code">
                                <pre>
                                    <ReactMarkdown source={sectionSeven} />
                                </pre>
                            </td>
                        </tr></tbody>
                    </table>
                </figure>
			</div>

			<div className="sectionSix">
				双向数据绑定
				<figure class="highlight">
					<figcaption>
						<span className="title">v-model</span>
						<a className="file">.vue</a>
					</figcaption>
					<table>
						<tbody><tr>
							<td className="code">
								<pre>
									<ReactMarkdown source={sectionEight} />
								</pre>
							</td>
						</tr></tbody>
					</table>
				</figure>
			</div>

			<div className="sectionSeven">
				组件结构
				<figure class="highlight">
					<figcaption>
						<span className="title">vue component structure</span>
						<a className="file">.vue</a>
					</figcaption>
					<table>
						<tbody><tr>
							<td className="code">
								<pre>
									<ReactMarkdown source={sectionNine} />
								</pre>
							</td>
						</tr></tbody>
					</table>
				</figure>
			</div>
        </div>
    )
}

export default VueLearning;