import clsx from "clsx";
import { useState } from "react";
import { Col, Row } from "react-grid-system";

import { Button } from "../../../../ui/button/Button";
import { Card } from "../../../../ui/card/Card";
import { CircularProgress } from "../../../../ui/circular-progress/CircularProgress";
import { Grid } from "../../../../ui/grid/Grid";
import { MainPanel } from "../../../../ui/mainpanel/MainPanel";
import { Modal } from "../../../../ui/modal/Modal";
import { Typography } from "../../../../ui/typography/Typography";

import styles from "./Property.module.scss";
import { PropertyProps } from "./Property.types";

export const Property: React.FC<PropertyProps> = ({}) => {
  const [isRegisterInterestModalOpen, setIsRegisterInterestModalOpen] = useState(false);
  const [isBuyOwnershipInfoModalOpen, setIsBuyOwnershipInfoModalOpen] = useState(false);

  return (
    <>
      <main className={styles.property__main}>
        <MainPanel.Container className={styles["property__main-panel--container"]}>
          <Typography.Subtitle>Solana · Real Estate</Typography.Subtitle>
          <Typography.Headline1>Property Name</Typography.Headline1>
          <div className={clsx(styles.property__media)}>
            <div className={clsx(styles["property__media--single-image"])}>
              <img src="https://i.pinimg.com/564x/fc/62/18/fc62180f74d38deb00a4f63a88eae76a.jpg" alt="property" />
            </div>
          </div>
          <div className={clsx(styles.property__details)}>
            <section>
              <Typography.Headline3>Description</Typography.Headline3>
              <Typography.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deserunt quasi ipsa nulla? Enim ad
                nobis officia ipsa. Exercitationem quos velit deserunt, perferendis perspiciatis doloribus quam.
                Repellat fugit dignissimos illum!
              </Typography.Text>
            </section>
            <section>
              <Typography.Headline3>Location</Typography.Headline3>
              <div className={styles.property__location}>
                <div className={styles["property__attachments--overlay"]}>
                  <div>
                    <Typography.Text className={styles["property__attachments--overlay-text"]}>
                      Sensitive information is encrypted for security.
                    </Typography.Text>
                    <Button size="xs" variant="outlined" onClick={() => setIsRegisterInterestModalOpen(true)}>
                      Register Interest
                    </Button>
                  </div>
                </div>
                <div
                  className={styles["property__location--map"]}
                  style={{
                    backgroundImage: `url(https://bafybeiguy4ekrxh6aohstla5syhk557jzkvvbxib6p6ii4tllqw4llc47y.ipfs.infura-ipfs.io/Screen%20Shot%202021-09-15%20at%2014.13.35.png)`,
                  }}
                />
                <Typography.Subtitle>Antigua, Guatemala</Typography.Subtitle>
                <Typography.Text>Villas de San Francisco, 33-D</Typography.Text>
              </div>
            </section>
            <section>
              <Typography.Headline3>Attachments</Typography.Headline3>
              <div className={styles.property__attachments}>
                <div className={styles["property__attachments--overlay"]}>
                  <div>
                    <Typography.Text className={styles["property__attachments--overlay-text"]}>
                      Sensitive information is encrypted for security.
                    </Typography.Text>
                    <Button size="xs" variant="outlined" onClick={() => setIsRegisterInterestModalOpen(true)}>
                      Register Interest
                    </Button>
                  </div>
                </div>
                <Grid.Row>
                  <Grid.Col lg={6}>
                    <Card
                      className={styles["property__attachments--card"]}
                      backgroundImageUrl="https://img.flaticon.com/icons/png/512/337/337946.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                      onClick={() => null}
                    >
                      <Card.Content className={styles["property__attachments--content"]}>
                        <Typography.Text>Real Estate Contract</Typography.Text>
                      </Card.Content>
                    </Card>
                  </Grid.Col>
                  <Grid.Col lg={6}>
                    <Card
                      className={styles["property__attachments--card"]}
                      backgroundImageUrl="https://img.flaticon.com/icons/png/512/337/337946.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                      onClick={() => null}
                    >
                      <Card.Content className={styles["property__attachments--content"]}>
                        <Typography.Text>Bank Statement</Typography.Text>
                      </Card.Content>
                    </Card>
                  </Grid.Col>
                  <Grid.Col lg={6}>
                    <Card
                      className={styles["property__attachments--card"]}
                      backgroundImageUrl="https://img.flaticon.com/icons/png/512/337/337946.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                      onClick={() => null}
                    >
                      <Card.Content className={styles["property__attachments--content"]}>
                        <Typography.Text>Energy Bill</Typography.Text>
                      </Card.Content>
                    </Card>
                  </Grid.Col>
                  <Grid.Col lg={6}>
                    <Card
                      className={styles["property__attachments--card"]}
                      backgroundImageUrl="https://img.flaticon.com/icons/png/512/337/337946.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                      onClick={() => null}
                    >
                      <Card.Content className={styles["property__attachments--content"]}>
                        <Typography.Text>Rental Contract</Typography.Text>
                      </Card.Content>
                    </Card>
                  </Grid.Col>
                </Grid.Row>
              </div>
            </section>
          </div>
        </MainPanel.Container>
        <div className={clsx(styles.property__sidebar)}>
          <div>
            <Typography.Headline5 className={styles["property__sidebar--heading"]}>Identified by</Typography.Headline5>
            <div>
              <Card className={styles["property__ownership--card"]}>
                <Card.Content>
                  <Typography.Description>Token Metadata</Typography.Description>
                  <Typography.Link href="#">metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s</Typography.Link>
                </Card.Content>
              </Card>
              <Card className={styles["property__ownership--card"]}>
                <Card.Content>
                  <Typography.Description>SPL Token</Typography.Description>
                  <Typography.Link href="#">metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s</Typography.Link>
                </Card.Content>
              </Card>
              <Card className={styles["property__ownership--card"]}>
                <Card.Content>
                  <Typography.Description>Created By</Typography.Description>
                  <Typography.Link href="#">metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s</Typography.Link>
                </Card.Content>
              </Card>
            </div>
          </div>
          <div>
            <Row>
              <Col>
                <Typography.Headline5 className={styles["property__sidebar--heading"]}>Owners</Typography.Headline5>
                <Typography.Description>Wallets (or programs) that hold a share of the property</Typography.Description>
              </Col>
              <Grid.Col justifyContent="end">
                <Button
                  variant="outlined"
                  size="xs"
                  color="secondary"
                  onClick={() => setIsBuyOwnershipInfoModalOpen(true)}
                >
                  Buy Ownership
                </Button>
              </Grid.Col>
            </Row>
            <Card className={styles["property__ownership--card"]}>
              <Card.Content>
                <Grid.Row align="center">
                  <Grid.Col lg={3}>
                    <CircularProgress size={70} strokeWidth={5} percentage={80} />
                  </Grid.Col>
                  <Grid.Col>
                    <Typography.Description>Sold</Typography.Description>
                    <Typography.Text>SOL 345.02 of SOL 600.00</Typography.Text>
                    <Typography.MiniDescription>
                      USD 46,980.01 of USD 65,000.00 at{" "}
                      <Typography.Anchor href="#">1 SOL = 25.99 USD</Typography.Anchor>
                    </Typography.MiniDescription>
                  </Grid.Col>
                </Grid.Row>
              </Card.Content>
            </Card>
            <div>
              <Card className={styles["property__ownership--card"]}>
                <Card.Content>
                  <Typography.Description>23% Ownership</Typography.Description>
                  <Typography.Link href="#">metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s</Typography.Link>
                  <hr />
                  <Typography.Description>At Transaction</Typography.Description>
                  <Typography.Link href="#">metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s</Typography.Link>
                </Card.Content>
              </Card>
              <Card className={styles["property__ownership--card"]}>
                <Card.Content>
                  <Typography.Description>34% Ownership</Typography.Description>
                  <Typography.Link href="#">metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s</Typography.Link>
                  <hr />
                  <Typography.Description>At Transaction</Typography.Description>
                  <Typography.Link href="#">metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s</Typography.Link>
                </Card.Content>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {isBuyOwnershipInfoModalOpen && (
        <Modal isOpened onClose={() => null} aria-labelledby="Register Interest Modal Window">
          <Modal.Header>
            <Typography.Headline3 className={styles["property__register-interest-modal--header"]}>
              Buy Property Ownership
            </Typography.Headline3>
          </Modal.Header>
          <Modal.Content>
            <Typography.Text>
              Buying Solana Real Estate NFT properties' ownership is anonymous and as simple as transfering any amount
              of SOL (lower than the total, of course) to the Property Sale Program.
            </Typography.Text>
            <Typography.Headline5>Owner Entitlement Details</Typography.Headline5>
            <Typography.Description>365 days of the year = 100% of the property value</Typography.Description>
            <Typography.Text>
              As an owner of property <Typography.Anchor>metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s</Typography.Anchor>{" "}
              you are entitled to:
            </Typography.Text>
            <Typography.Text>
              a) Access the property by N% of days of the 365 days relative to the percentage of your ownership.
            </Typography.Text>
            <Typography.Text>b) ...</Typography.Text>
            <Typography.Headline5>Owner Obligations Details</Typography.Headline5>
          </Modal.Content>
          <Modal.Actions>
            <Grid.Row>
              <Grid.Col>
                <Button color="secondary" variant="outlined" onClick={() => setIsBuyOwnershipInfoModalOpen(false)}>
                  Nevermind
                </Button>
              </Grid.Col>
              <Grid.Col>
                <Button>Buy Ownership</Button>
              </Grid.Col>
            </Grid.Row>
          </Modal.Actions>
        </Modal>
      )}

      {isRegisterInterestModalOpen && (
        <Modal isOpened onClose={() => null} aria-labelledby="Register Interest Modal Window">
          <Modal.Header>
            <Typography.Headline3 className={styles["property__register-interest-modal--header"]}>
              Register Interest
            </Typography.Headline3>
          </Modal.Header>
          <Modal.Content>
            <Typography.Text>
              Solana Real Estate NFT properties are sold worldwide. To access senstitive information such as exact
              location &amp; attachments, THE PLATFORM requests a payment of 2 SOL valid for 1 month of access to all
              properties' information.
            </Typography.Text>
            <Typography.Headline5>OK, but how does it work?</Typography.Headline5>
            <Typography.Text>
              When a user creates an NFT through THE PLATFORM, attachment properties of the asset are encrypted in our
              servers so that the metadata is not stored in plain text. Then it is stored in the blockchain. By
              submitting your 2 SOL payment, the server whitelists your wallet public key and you'll be able to see the
              private content of any of the properties listed.
            </Typography.Text>
            <Typography.Headline5>OK, and where does the money go?</Typography.Headline5>
            <Typography.Text>
              THE PLATFORM is an open-source project, and the money is distributed across its maintainers to pay for
              hosting expenses and further development.
            </Typography.Text>
          </Modal.Content>
          <Modal.Actions>
            <Grid.Row>
              <Grid.Col>
                <Button color="secondary" variant="outlined" onClick={() => setIsRegisterInterestModalOpen(false)}>
                  Nevermind
                </Button>
              </Grid.Col>
              <Grid.Col>
                <Button>Pay 2 SOL</Button>
              </Grid.Col>
            </Grid.Row>
          </Modal.Actions>
        </Modal>
      )}
    </>
  );
};