import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MrpRegister from './MrpRegister';
import MrpDialog from './MrpDialog';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
    searchMpsList,
    searchMrpList,
    MrpRegisterList,
    searchGetMrpList,
    searchGatherList,
    GatherInsert
} from 'ERP/LOGISTIC/Production/action/ProductionAction';
import MrpGather from './MrpGather';

const MrpContainer = props => {
    const {
        searchMpsList,
        MrpList,
        searchMrpList,
        MrpSimulatorList,
        MrpRegisterList,
        searchGetMrpList,
        MrpGetList,
        searchGatherList,
        GatherList,
        GatherInsert
    } = props;

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="MRP등록" />
                    <Tab label="소요량취합" />
                </Tabs>
            </AppBar>
            {value === 0 && (
                <MrpRegister
                    searchMpsList={searchMpsList}
                    MrpList={MrpList}
                    searchMrpList={searchMrpList}
                    MrpSimulatorList={MrpSimulatorList}
                    MrpRegisterList={MrpRegisterList}
                />
            )}
            {value === 1 && (
                <MrpGather
                    searchGetMrpList={searchGetMrpList}
                    MrpGetList={MrpGetList}
                    searchGatherList={searchGatherList}
                    GatherList={GatherList}
                    GatherInsert={GatherInsert}
                />
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        MrpList: state.Logi.Production.MrpList,
        MrpSimulatorList: state.Logi.Production.MrpSimulatorList,
        MrpGetList: state.Logi.Production.MrpGetList,
        GatherList: state.Logi.Production.GatherList
    };
};

export default connect(mapStateToProps, {
    searchMpsList,
    searchMrpList,
    MrpRegisterList,
    searchGetMrpList,
    searchGatherList,
    GatherInsert
})(withRouter(MrpContainer));
