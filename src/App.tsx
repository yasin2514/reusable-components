import { ChangeEvent, useState } from "react";
import Container from "./components/layout/Container";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";

const App = () => {
  const [modal, setModal] = useState(false);
  const handleModalClose = () => {
    setModal((pre) => !pre);
  };
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (modal) {
      handleModalClose();
    }
  };
  return (
    <Container>
      <div className="h-screen flex flex-col justify-center items-center gap-4">
        <h3>This is app page</h3>
        <Button
          onClick={() => setModal((pre) => !pre)}
          className={"w-1/6"}
          variant="outline"
        >
          Click
        </Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <h2>This is Modal Header</h2>
            <Modal.ModalClose />
          </Modal.Header>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input type="text" className="border" />
            <input type="text" className="border" />
            <Button type="submit" variant="submit">
              Submit
            </Button>
          </form>
        </Modal>
      </div>
    </Container>
  );
};

export default App;
