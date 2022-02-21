import { useState } from "react";

import styles from "./Board.module.css";

import Cell from "../Cell/Cell";

import convertPresetToBoard from "./services/convertPresetToBoard";
import preset from "./services/preset";

import kw from "./images/kw.svg";
import qw from "./images/qw.svg";
import rw from "./images/rw.svg";
import bw from "./images/bw.svg";
import nw from "./images/nw.svg";
import pw from "./images/pw.svg";

import kb from "./images/kb.svg";
import qb from "./images/qb.svg";
import rb from "./images/rb.svg";
import bb from "./images/bb.svg";
import nb from "./images/nb.svg";
import pb from "./images/pb.svg";

const Board = () => {
  const [side, setSide] = useState("white");
  const [showCoords, setShowCoords] = useState(true);

  const boardSide = `board_${side}_side`;
  const numbersSide = `numbers_${side}_side`;
  const lettersSide = `letters_${side}_side`;
  const visibility = showCoords ? "" : styles.disable_coords;

  const board = convertPresetToBoard(preset);

  const switchSide = () => {
    side === "white" ? setSide("black") : setSide("white");
  };

  const switchCoords = () => {
    showCoords ? setShowCoords(false) : setShowCoords(true);
  };

  return (
    <>
      <div className={styles.board_container}>
        <div className={`${styles.angle} ${visibility}`}></div>
        <div
          className={`${styles.letters} ${styles[lettersSide]} ${visibility}`}
        >
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
          <div>e</div>
          <div>f</div>
          <div>g</div>
          <div>h</div>
        </div>
        <div className={`${styles.angle} ${visibility}`}></div>
        <div
          className={`${styles.numbers} ${styles[numbersSide]} ${visibility}`}
        >
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div>

        <div className={`${styles.board} ${styles[boardSide]}`}>
          {board?.map((horisontal, h) => {
            return horisontal.map(({ color, selected }, v) => {
              return <Cell key={`${v}${h}`} v={v} h={h} color={color} />;
            });
          })}
        </div>

        <div
          className={`${styles.numbers} ${styles[numbersSide]} ${visibility}`}
        >
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div>
        <div className={`${styles.angle} ${visibility}`}></div>
        <div
          className={`${styles.letters} ${styles[lettersSide]} ${visibility}`}
        >
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
          <div>e</div>
          <div>f</div>
          <div>g</div>
          <div>h</div>
        </div>
        <div className={`${styles.angle} ${visibility}`}></div>
      </div>
      <div className={styles.buttons}>
        <button onClick={switchSide}>Switch side</button>
        <button onClick={switchCoords}>Switch coords</button>
      </div>
    </>
  );
};

export default Board;
