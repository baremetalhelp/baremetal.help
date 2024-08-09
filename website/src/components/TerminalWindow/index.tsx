/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { type ReactNode } from "react";

import styles from "./styles.module.css";

interface Props {
    children: ReactNode;
}

export default function TerminalWindow({ children }: Props): JSX.Element {
    return (
        <div className={styles.terminalWindow}>
            <div className={styles.browserWindowHeader}>
                <div className={styles.buttons}>
                    <span
                        className={styles.dot}
                        style={{ background: "#f25f58" }}
                    />
                    <span
                        className={styles.dot}
                        style={{ background: "#fbbe3c" }}
                    />
                    <span
                        className={styles.dot}
                        style={{ background: "#58cb42" }}
                    />
                </div>
            </div>

            <div className={styles.browserWindowBody}><pre>{children}</pre></div>
        </div>
    );
}
