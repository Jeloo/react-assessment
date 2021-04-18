import React from 'react';
import styled from 'styled-components';
import useHistory from '@components/report/useHistory';
import Modal from '../modal';
import { ColorType, Size } from '../ui/theme';
import ButtonDefault from '../ui/Button';
import Spinner from '../ui/Spinner';
import { FlexColumn, FlexLine } from '../ui/Flex';
import Text from '../ui/Text';
import useModals from '../modal/useModals';
import DeleteHistory from '../report/DeleteHistory';

const Button = styled(ButtonDefault)`
  margin-right: 5px;
`;

const Modals = {
  spinner: 'spinner',
  confirmation: 'confirmation',
  deletion: 'deletion',
};

const ModalDemo = () => {
  const {
    showModal, closeModal, isShown, closeAll, anyShown
  } = useModals();

  const { history, removeItems } = useHistory();

  return (
    <>
      <FlexLine>
        <Button
          onClick={() => showModal(Modals.spinner, true)}
          colorType={ColorType.primary}
        >
          Show spinner modal
        </Button>
        <Button
          onClick={() => {
            showModal(Modals.confirmation, true);
          }}
          colorType={ColorType.secondary}
        >
          Show confirmation modal
        </Button>
        <Button
          onClick={() => showModal(Modals.deletion, true)}
          colorType={ColorType.danger}
        >
          Show deletion modal
        </Button>
        {anyShown() && (
          <Button onClick={closeAll} fadeIn>
            Close All
          </Button>
        )}
      </FlexLine>

      {isShown(Modals.spinner) && (
        <Modal
          priority={2}
          color={ColorType.danger}
          styles={{
            ModalWrapper: {
              height: '150px',
              width: '400px',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <FlexColumn>
            <Spinner size={Size.x2} />
            <Text size={Size.x05} colorType={ColorType.secondary}>
              Data is loading
            </Text>
          </FlexColumn>
        </Modal>
      )}

      {isShown(Modals.confirmation) && (
        <Modal
          headingText="Are you sure you want to delete all of your files?"
          color={ColorType.danger}
          styles={{
            Button: {
              width: '100px',
              marginLeft: '10px',
            },
            ModalFooter: {
              justifyContent: 'flex-end',
            },
          }}
          buttons={[
            {
              id: 'yes',
              text: 'Yes',
              colorType: ColorType.primary,
              onClick: () => closeModal(Modals.confirmation),
            },
            {
              id: 'no',
              text: 'No',
              colorType: ColorType.secondary,
              onClick: () => closeModal(Modals.confirmation),
              closeOnClick: true,
            },
          ]}
        >
          <p>This action can not be undone.</p>
        </Modal>
      )}

      {isShown(Modals.deletion) && (
        <DeleteHistory data={history}>
          {(renderHistory, confirmed, selected) => (
            <Modal
              headingText="Are you sure you want to delete this report and its history?"
              color={ColorType.danger}
              styles={{
                ModalWrapper: {
                  width: '500px',
                },
                Button: {
                  width: '100px',
                  marginLeft: '10px',
                },
                ModalFooter: {
                  justifyContent: 'flex-end',
                },
              }}
              buttons={[
                {
                  id: 'deleteAll',
                  text: 'Delete all',
                  colorType: ColorType.primary,
                  onClick: () => {
                    removeItems(selected);
                  },
                  disabled: !confirmed,
                },
                {
                  id: 'cancel',
                  text: 'Cancel',
                  colorType: ColorType.secondary,
                  onClick: () => closeModal(Modals.deletion),
                  closeOnClick: true,
                },
              ]}
            >
              {renderHistory()}
            </Modal>
          )}
        </DeleteHistory>
      )}
    </>
  );
};

export default ModalDemo;
