import React, { useState, useEffect, render, useMemo } from "react";
import {
  Button,
  Row,
  Col,
  Tooltip,
  OverlayTrigger,
  ModalBody,
} from "react-bootstrap";
import {
  quoteRender,
  plotRender,
  yearRender,
  genreRender,
} from "../clueRendering";
import ClueButton from "./clueButton";

const clueReset = () => {
  //reset the clue area
  document.getElementById("clueImg").hidden = true;
  document.getElementById("clueContent").hidden = true;
  document.getElementById("chooseClue").hidden = false;
  //reset all the clues buttons
};
var imageData;
var plotData;
var noQuote;
var imageClueAvailable;
function ClueView(props) {
  function renderAndActivateButtons(event, getClueData) {
    renderClue(event.target.id, getClueData);
    document.getElementById(event.target.id).classList.remove("glow");
    document
      .getElementById(event.target.id)
      .classList.add("clue-btn-activated");
  }

  function renderClue(clueID, getClueFunction) {
    document.getElementById("chooseClue").hidden = true;
    var clueData = getClueFunction;
    var imgDiv = document.getElementById("clueImg");
    var textDiv = document.getElementById("clueContent");

    if (clueID === "image") {
      textDiv.hidden = true;
      imgDiv.hidden = false;
      if (clueData == "loading") {
        imgDiv.src = "https://i.postimg.cc/NMZdZDcX/150x150.gif";
      } else {
        imgDiv.src = clueData;
      }
    } else {
      imgDiv.hidden = true;
      textDiv.hidden = false;
      textDiv.className = "clue-" + clueID;

      if (clueID === "quote") {
        if (clueData.length > 200) {
          textDiv.style = "font-size=20pt;";
        }
        textDiv.innerHTML = quoteRender(clueData);
      }
      if (clueID === "plot") {
        textDiv.innerHTML = plotRender(clueData);
      }
      if (clueID === "year") {
        textDiv.innerHTML = yearRender(clueData);
      }
      if (clueID === "genres") {
        textDiv.innerHTML = genreRender(clueData);
      }
    }
  }

  function checkActivatedClues(currentClueHook, cluePoints) {
    if (currentClueHook) {
      return;
    } else {
      props.setScore(props.score - cluePoints);
    }
  }
  useEffect(() => {
    if (props.plotHook) {
      plotData = props.plotClue;
      checkActivatedClues(props.plotHook);
      renderAndActivateButtons({ target: { id: "plot" } }, props.plotClue);
    }
  }, [props.plotHook, props.plotClue]);

  useEffect(() => {
    if (props.imageHook) {
      imageData = props.imageClue;
      checkActivatedClues(props.imageHook);
      renderAndActivateButtons({ target: { id: "image" } }, props.imageClue);
    }
  }, [props.imageHook, props.imageClue]);
  return (
    <div className="col align-self-center question-content">
      <div className="clue-content">
        <div className="clue-choose" id="chooseClue">
          <p className="title-text">Open your first clue below</p>
          <p className="score">
            Choose your preferred clue and trade possible points!&nbsp;&nbsp;
            <OverlayTrigger
              placement="right"
              delay={{ show: 50, hide: 400 }}
              overlay={
                <Tooltip>
                  If a quote, the plot and the release year isn't enough for you
                  to guess, you'll be allowed to see a random image from the
                  movie
                </Tooltip>
              }
            >
              <i className="bi bi-info-circle"></i>
            </OverlayTrigger>
          </p>

          <i className="bi bi-arrow-down-short title-text"></i>
        </div>
        <img
          className="clue-image rounded"
          id="clueImg"
          src=""
          hidden={true}
        ></img>
        <div className="clue-quote" hidden={true} id="clueContent"></div>
      </div>

      {/* BUTTONS FOR THE CLUES */}
      {(noQuote = props.quoteClue[0] === "No quote" ? true : false)}
      {
        (imageClueAvailable =
          (noQuote ? true : props.quoteHook) &&
          props.yearHook &&
          props.plotClue != "loading"
            ? true
            : false)
      }
      <Row className="buttons animate__animated animate__fadeInUp">
        <ClueButton
          overlay={
            <Tooltip>
              See the <strong>year</strong> the movie was released
            </Tooltip>
          }
          clueHook={props.yearHook}
          id={"year"}
          text={"Year"}
          cluePoints={1}
          choice={(e) => {
            checkActivatedClues(props.yearHook, 1);
            props.activateYear();
            renderAndActivateButtons(e, props.yearClue);
          }}
        />
        <ClueButton
          overlay={
            noQuote ? (
              <Tooltip>
                For this particular movie, no <strong>quote</strong> is
                available...
              </Tooltip>
            ) : (
              <Tooltip>
                Get a <strong>quote</strong> from the movie
              </Tooltip>
            )
          }
          clueHook={props.quoteHook}
          id={"quote"}
          text={"Quote"}
          disabled={noQuote}
          cluePoints={2}
          choice={
            noQuote
              ? null
              : (e) => {
                  checkActivatedClues(props.quoteHook, 2);
                  props.activateQuote();
                  renderAndActivateButtons(e, props.quoteClue);
                }
          }
        />
        <ClueButton
          overlay={
            <Tooltip>
              Read a short <strong>plot</strong> from the movie
            </Tooltip>
          }
          clueHook={props.plotHook}
          id={"plot"}
          text={"Plot"}
          cluePoints={3}
          choice={(e) => {
            checkActivatedClues(props.plotHook, 3);
            props.activatePlot();
            renderAndActivateButtons(e, plotData);
          }}
        />
        <ClueButton
          overlay={
            !imageClueAvailable ? (
              <Tooltip>
                You have to open the other clues before an{" "}
                <strong>image</strong> is available
              </Tooltip>
            ) : (
              <Tooltip>
                See a random <strong>image</strong> from the movie
              </Tooltip>
            )
          }
          clueHook={props.imageHook}
          id={"image"}
          text={"Image"}
          cluePoints={3}
          disabled={!imageClueAvailable}
          choice={
            !imageClueAvailable
              ? null
              : (e) => {
                  checkActivatedClues(props.imageHook, 3);
                  props.activateImage();
                  renderAndActivateButtons(e, imageData);
                }
          }
        />
      </Row>
    </div>
  );
}
export { clueReset };
export default ClueView;
