import React from 'react';
import '../post/tools.scss';

const toolsTitle = (markdownSty, props) => {
    return (
        <div>
            <div className={markdownSty.name}>
                {props.title}
            </div>
        </div>
    )
}

const Tools = () => {
    return (
        <div className="blog-tools">
            <div className="command-section">
                {toolsTitle({name: 'markdown-title'},{title: 'GIT'})}
                <div className="markdown-sect">
                    <ul>
                        <p>Set Upstream</p>
                        <li>
                            git push —set-upstream remoteName branchName <br />
                            Example (git push —set-upstream wkhaw wkbranch)
                        </li>
                        <p>Checkout Branch</p>
                        <li>
                            git checkout -b newBranchName origin/branchName
                        </li>
                        <p>Delete Branch</p>
                        <li>
                            git branch -D localBranchName
                        </li>
                        <p>Delete Remote Branch</p>
                        <li>
                            git push remoteName :branchName
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tmux-section">
                {toolsTitle({name: 'markdown-title'},{title: 'TMUX'})}
                <div className="markdown-sect">
                    <ul>
                        <p>Normal Usage</p>
                        <li>open terminal type tmux</li>
                        <li>ctrl+b before any action</li>
                        <li>ls .config</li>
                        <li>cd .config/tmuxinator</li>
                        <li>ls (see what .yml inside)</li>
                        <li>tmuxinator start folderName</li>
                        <li>tmux list-sessions</li>
                        <li>tmux kill-session</li>
                        <li>tmux kill-session -t theOneYouOpened</li>
                        <li>tmux split-window -v</li>
                        <li>ctrl+b, shift & (kill window)</li>
                        <li>%5 (kill window)</li>
                        <li>set-option -g mouse on (enable mouse)</li>
                    </ul>
                    <ul>
                        <p>Layout Option</p>
                        <li>even-horizontal (tmux split-window -h)
                        </li>
                        <li>even-vertical (tmux split-window -v)</li>
                        <li>main-horizontal</li>
                        <li>main-vertical</li>
                        <li>tiled</li>
                    </ul>
                </div>
            </div>
            <div className="npm-section">
                {toolsTitle({name: 'markdown-title'},{title: 'NPM'})}
                <div className="markdown-sect">
                    <ul>
                        <li>
                            <p>npm help - this will show all useful command</p>
                        </li>
                    <li>
                        <p>npm repo repoName -  this will open the repo in browser</p>
                    </li>
                    <li>
                        <p>npm home react - this will open browser and go to react page</p>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Tools;