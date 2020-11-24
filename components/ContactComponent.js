import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';
import { Text } from 'react-native';


class Contact extends React.Component {

    static navigationOptions = {
        title: 'Contact Us'
    };
    
    render() {

        return (
            <ScrollView>
                <Card
                    title="Contact Information"
                    wrapperStyle={{margin: 20}}
                >
                    <Text>1 Nucamp Way</Text>
                    <Text>Seattle, WA 98001</Text>
                    <Text>U.S.A.</Text>
                    <Text />
                    <Text>Phone: 1-206-555-1234</Text>
                    <Text style={{marginBottom: 10}}>Email: campsites@nucamp.co</Text>
                </Card>

            </ScrollView>
        );
    };
}

export default Contact;
