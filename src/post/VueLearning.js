import React from 'react';
import '../post/vueLearning.scss';
const ReactMarkdown = require('react-markdown');

const sectionOne = '`<p v-text="title"></p>`';
const sectionTwo = '`<p v-html="title"></p>`';
const sectionThree = '`<p v-if="isShow"></p>`';
const sectionFour = '`<p v-show="isShow"></p>`';
const sectionFive ='`<ul>\n <li v-for="item in arr">\n {{ item }}</li></ul>`'
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
        </div>
    )
}

export default VueLearning;