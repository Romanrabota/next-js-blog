import React, { PureComponent } from 'react';
import ReactModal from 'react-modal';
//import { FaTimes, FaAngleRight } from 'src/components/FaIcons/icons';
//import { setFlagger } from 'src/redux/actions';

export interface IDialogProps {
    flagId: string;
    title?: string;
    body: any;
    showModal?: boolean;
    data?: any;
    className?: string;
    //setFlagger: (key: string, value: any) => Action<any>;
}

class Dialog extends PureComponent<IDialogProps> {

    public static defaultProps: Partial<IDialogProps> = {
        className: '',
        showModal: false,
        data: {},
    };

    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleCloseModal = this.handleCloseModal.bind(this);
        ReactModal.setAppElement('body');
    }

    public handleCloseModal() {
        const {flagId} = this.props;
      //  setFlagger(flagId, null);
    }

    public render() {
        const { title, body, className, data } = this.props;
        return (
            <ReactModal
                //className={'bg-white rounded-lg outline-none ' + className}
                className={'bg-white rounded-lg outline-none '}
                overlayClassName='dialog-overlay flex justify-center items-center fixed h-full w-full inset-0 px-4'
                isOpen={data !== null}
                onRequestClose={this.handleCloseModal}
                // contentLabel='Dialog modal block'
            >
                <div className='h-full'>
                    <div className='flex flex-col h-full'>
                        <div className={`flex justify-between w-full items-center ${title ? 'border-b border-gray-200' : ''} px-3 portletHeight`}>
                         {/*   {title ? <div className='flex-1 flex h3 text-yellow-500 mr-8 items-center'>
                                <FaAngleRight size='24px' className='mr-2' />
                                <h2 > {title}</h2>  </div>
        : <div></div>}*/}
                           {/* <button className='focus:outline-none' onClick={this.handleCloseModal}>
                                <span className='text-lg text-gray-300 hover:text-yellow-600 transition-all duration-400 ease-in-out'>
                               
                                </span>
      </button>*/}
                        </div>
                        <div className={`flex-1 flex items-center w-full ${title ? 'p-6' : 'px-6 pt-2 pb-6'} overflow-y-auto`}>
                            {body}
                        </div>
                    </div>
                </div>
            </ReactModal>
        );
    }
}

/*const mapStateToProps = (state, props) => {
    const { flagger } = state;
    return {
        data: Object.prototype.hasOwnProperty.call(flagger, props.flagId) ? flagger[props.flagId] : null,
    };
};*/

export default Dialog;



/*import React from "react";

function Modal({ setOpenModal }) {
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Are You Sure You Want to Continue?</h1>
          </div>
          <div className="body">
            <p>The next page looks amazing. Hope you want to go there!</p>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button>Continue</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;*/