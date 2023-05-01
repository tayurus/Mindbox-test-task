import React, { useState } from "react";

import { Modal, Invites } from "src/components";

type Props = {};
export const Root: React.FC<Props> = () => {
  const [invites, setInvites] = useState<string[]>([]);
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setOpened(true)}>Open invites list!</button>
      <Modal opened={opened} onClose={() => setOpened(false)}>
        <Invites
          invites={invites}
          onAdd={(name) => setInvites((prevState) => [...prevState, name])}
        />
      </Modal>
    </>
  );
};
