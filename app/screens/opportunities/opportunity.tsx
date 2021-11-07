import React from 'react'
import { Text, View } from '../../components/Themed'
import OpportunityType from './opportunityType'
import styled from '@emotion/native'
import { Button, TouchableOpacity, Linking } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const OpportunityCard = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 200px;
    width: 90%;
    align-items: center;
    border-radius: 12px;
    background-color: #000;
`

const CircularImage = styled.Image`
    width: 100%;
    height: 150px;
`

const OppurtunityContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    align-items: center;
    padding: 4%;
`
const CompanyContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 50px;
    width: 100%;
    align-items: center;
    padding: 5%;
`

const Company = styled.Text`
    color: #fff;
    background-color: grey;
    border-radius: 20px;
    padding: 7px;
`

const Tag = styled.Text`
    color: #fff;
    background-color: grey;
    border-radius: 20px;
    padding: 7px;
    margin-left: 7px;
`

const Role = styled.Text`
    color: #fff;
    font-size: 18px;
`

const Opportunity: React.FC<OpportunityType> = ({ url, company, role, tag }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <OpportunityCard>
                <CircularImage source={{ uri: url }} />
                <OppurtunityContent>
                    <Role> {role} </Role>
                    <TouchableOpacity onPress={() => Linking.openURL(url)}>
                        <MaterialIcons name="open-in-new" size={24} color="white" />
                    </TouchableOpacity>
                </OppurtunityContent>
            </OpportunityCard>
            <CompanyContent>
                <Company>{company}</Company>
                <Tag>{tag}</Tag>
            </CompanyContent>
        </View>
    )
}

export default Opportunity
