import React from 'react';
import '../post/tools.scss';

const Tools = () => {
    return (
        <div className="blog-tools">
            <div className="command-section">
                <div className="markdown-title">
                    GIT
                </div>
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
                <div className="markdown-title">
                    TMUX
                </div>
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
        </div>
    )
};

export default Tools;