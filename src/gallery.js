import React ,{ Component } from 'react';
import {StyleSheet ,Button, View ,ScrollView, Text ,Image} from 'react-native';
import { Container, Row ,Col} from 'reactstrap';

export default class Gallery extends Component {
    render() { 
        return ( 
            
                <Container>
                    <Row>
                        
                        <Col x="3">
                              <Image 
                                      style={{width:80,height:100}}
                                      source={require('.././assets/sea.jpg')}/>
                        </Col>
            
                        <Col x="3">
                              <Image 
                                      style={{width:80,height:100}}
                                      source={require('.././assets/sea.jpg')}/>
                        </Col>
             
              
                        <Col x="3">
                              <Image 
                                       style={{width:80,height:100}}
                                       source={require('.././assets/sea.jpg')}/>
                        </Col>

                   </Row>
                </Container>

         );
    }
}
 
