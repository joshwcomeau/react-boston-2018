import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Flipper, Flipped } from 'react-flip-toolkit';

const modalWidth = 150;
const modalHeight = 250;
const buttonWidth = 100;
const buttonHeight = 100;

const Modal = styled.div`
  background-color: red;
  position: absolute;
  width: ${({ state }) => (state !== 'open' ? '1px' : `${modalWidth}px`)};
  height: ${({ state }) => (state !== 'open' ? '1px' : `${modalHeight}px`)};
  top: ${({ state, top }) => {
    if (state === 'closing') return '50%';
    else return top ? `${buttonHeight}px` : `-${modalHeight}px`;
  }};
  left: ${({ state, left }) => {
    if (state === 'closing') return '50%';
    else return left ? `${buttonWidth}px` : `-${modalWidth}px`;
  }};
  transform: ${({ state }) =>
    state === 'closing' ? 'translate(-50%, -50%)' : 'none'};
`;

const StyledButton = styled.button`
  width: ${buttonWidth}px;
  height: ${buttonHeight}px;
  text-align: center;
`;

const StyledRegion = styled.div`
  position: relative;
`;

const ModalRegion = ({ index, modalList, onClick, clearModalList }) => {
  const isFinalDestination = index === modalList[1];

  let flipId = modalList.length === 2 ? null : `modal-${index}`;
  const modalProps = {
    top: index < 2,
    left: index % 2 === 0,
    state: 'closed',
  };

  if (modalList[0] === index && modalList.length === 1) {
    modalProps.state = 'open';
  } else if (isFinalDestination) {
    modalProps.state = 'closing';
    flipId = `modal-${modalList[0]}`;
  }

  return (
    <StyledRegion>
      <StyledButton onClick={() => onClick(index)}>Click</StyledButton>
      <Flipped
        flipId={flipId}
        onComplete={() => isFinalDestination && clearModalList()}
        transformOrigin={
          modalProps.state === 'closing'
            ? '0 0'
            : `${modalProps.top ? 'top' : `bottom`} ${
                modalProps.left ? 'left' : `right`
              }`
        }
      >
        <Modal {...modalProps} />
      </Flipped>
    </StyledRegion>
  );
};

const StyledFlipper = styled(Flipper)`
  display: grid;
  height: 100vh;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-content: space-between;
`;

class App extends React.Component {
  // the state for the modal's position is in this two integer array
  state = {
    modal: [],
  };

  clearModalList = () => this.setState({ modal: [] });

  addIndexToModalList = i =>
    this.setState({
      modal: this.state.modal.concat(i),
    });

  render() {
    return (
      <StyledFlipper flipKey={this.state.modal.join('')}>
        {[...Array(4).keys()].map(i => (
          <ModalRegion
            key={i}
            index={i}
            onClick={this.addIndexToModalList}
            clearModalList={this.clearModalList}
            modalList={this.state.modal}
          />
        ))}
      </StyledFlipper>
    );
  }
}

export default App;
