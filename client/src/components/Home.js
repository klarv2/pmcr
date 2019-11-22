import React, { Component, Fragment } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Spinner, Row, Col } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import ItemModal from './ItemModal';

import CarouselSlider from './CarouselSlider';
import CardSummary from './CardSummary'

import { getImages } from '../actions/imageActions';
import PropTypes from 'prop-types';

class Home extends Component {
  static propTypes = {
    getImages: PropTypes.func.isRequired,
    image: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    isLoading: PropTypes.bool,
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getImages();
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { images } = this.props.image;
    const { items } = this.props.item;
     return (
       <div>
      {this.props.isAuthenticated ? 
       (
        <Container>
        <ItemModal/>
          {this.props.isLoading ?  <Spinner color="info" /> : null}
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {items.map(({ _id, name, saveby }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  {this.props.isAuthenticated ? (
                    <Button className='remove-btn' color='danger' size='sm' onClick={this.onDeleteClick.bind(this, _id)}>
                      &times;
                    </Button>
                  ) : null}
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
      ) : (
      <Container>
        {this.props.isLoading ?  <Spinner color="info" /> : null}
        <Row>
          <CarouselSlider />
        </Row>
        <Row className='mt-2'>
          {images.map(image => (
            <Fragment>
              {image.imgType === 'CardHome' ? 
                <Col sm="4"><CardSummary image={image} /></Col>
                : null
              }
            </Fragment>   
          ))}
        </Row>   
      </Container>
      )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  image: state.image,
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading
});

export default connect(mapStateToProps,{ getImages, getItems, deleteItem })(Home);
