import React from "react";
import {Checkbox} from "antd";

export interface DefaultSectionsInterface {
    value: string | React.ReactElement,
    position: [number, number, number, number]
}

export const DefaultSectionsConstant: Array<DefaultSectionsInterface> = [
    {
        value: 'Account number',
        position: [113, 170, 296, 193]
    },
    {
        value: <img src={'./logo.png'} alt={'logo'}/>,
        position: [1416, 164, 1534, 187]
    },
    {
        value: ':',
        position: [298, 170, 302, 193]
    },
    {
        value: 'Page 1 of 6',
        position: [852, 171, 1000, 194]
    },
    // your business and fargo
    {
        value: <div className={'w-[831px] h-[7px] bg-black'}></div>,
        position: [119, 840, 950, 874]
    },
    {
        value: <h1 className={'font-bold text-[25px]'}>Your Business and Wells Fargo</h1>,
        position: [119, 890, 661, 924]
    },
    {
        value: 'Access complimentary resources and tools to help you create or revise your',
        position: [120, 936, 850, 955]
    },
    {
        value: 'business plan - whether you\'re an experienced business owner or just starting out.',
        position: [120, 961, 950, 979]
    },
    {
        value: 'Find out more at wellsfargoworks.com/plan.',
        position: [120, 983, 700, 1003]
    },

    // activity summary
    {
        value:  <div className={'w-[700px] h-[5px] bg-black'}></div>,
        position: [120, 1263, 820, 1291]
    },
    {
        value: <h1 className={'font-bold text-[25px]'}>Activity summary</h1>,
        position: [120, 1313, 363, 1341]
    },
    {
        value: 'Beginning balance on 7/1',
        position: [185, 1354, 412, 1372]
    },
    {
        value: 'Deposits/Credits',
        position: [185, 1384, 333, 1403]
    },
    {
        value: 'Withdrawals/Debits',
        position: [183, 1415, 357, 1431]
    },
    {
        value: <div className={'w-[635px] h-[5px] bg-black'}></div>,
        position: [183, 1442, 818, 1461]
    },
    {
        value: <p className={'font-bold'}>Ending balance on 7/31</p>,
        position: [185, 1462, 409, 1481]
    },
    {
        value: 'Average ledger balance this period',
        position: [183, 1531, 498, 1549]
    },
    {
        value: <p className={'font-bold'}>Overdraft Protection</p>,
        position: [110, 1621, 310, 1636]
    },
    {
        value: 'Your account is linked to the following for Overdraft Protection:',
        position: [190, 1657, 748, 1674]
    },
    {
        value: <div className={'w-[10px] h-[10px] bg-black'}></div>,
        position: [188, 1692, 197, 1699]
    },
    {
        value: 'Savings',
        position: [230, 1689, 300, 1708]
    },
    {
        value: '000007412780178',
        position: [326, 1687, 500, 1706]
    },
    {
        value: '48,580.14',
        position: [729, 1386, 820, 1401]
    },
    {
        value: '-',
        position: [713, 1417, 720, 1430]
    },
    {
        value: '49,078.36',
        position: [730, 1417, 819, 1430]
    },
    {
        value: '$9,932.64',
        position: [731, 1530, 818, 1546]
    },

    //QUESTIONS
    {
        value: <div className={'w-[7px] h-[351px] bg-black'}></div>,
        position: [1025, 428, 1040, 779]
    },
    {
        value: <h1 className={'font-bold text-[25px]'}>Questions?</h1>,
        position: [1053, 428, 1203, 453]
    },
    {
        value: 'Available   by   phone    24 hours a day, 7 days a week',
        position: [1051, 477, 1549, 497]
    },
    {
        value: ':',
        position: [1548, 477, 1554, 497]
    },
    {
        value: 'Telecommunications Relay Services calls accepted',
        position: [1053, 507, 1525, 526]
    },
    {
        value: <p className={'font-bold'}>1-800-CALL-WELLS</p>,
        position: [1059, 539, 1316, 560]
    },
    {
        value: '(1-800-225-5935)',
        position: [1335, 539, 1506, 561]
    },
    {
        value: 'TTY',
        position: [1065, 584, 1103, 599]
    },
    {
        value: ':',
        position: [1104, 584, 1110, 599]
    },
    {
        value: '1-800-877-4833',
        position: [1118, 583, 1274, 600]
    },
    {
        value: 'Enespañd',
        position: [1062, 616, 1163, 635]
    },
    {
        value: ':',
        position: [1163, 617, 1168, 634]
    },
    {
        value: '1-877-337-7454',
        position: [1187, 615, 1345, 634]
    },
    {
        value: 'Online',
        position: [1053, 660, 1116, 679]
    },
    {
        value: ':',
        position: [1117, 660, 1123, 679]
    },
    {
        value: 'wellsfargo.com/biz',
        position: [1132, 660, 1313, 679]
    },
    {
        value: 'Write',
        position: [1052, 700, 1102, 722]
    },
    {
        value: ':',
        position: [1104, 700, 1110, 721]
    },
    {
        value: 'P.O. Box 6995',
        position: [1124, 732, 1267, 747]
    },
    {
        value: 'Portland, OR 97228-6995',
        position: [1123, 760, 1373, 779]
    },

    //account options
    {
        value:  <div className={'w-[528px] h-[7px] bg-black'}></div>,
        position: [1045, 840, 1573, 874]
    },
    {
        value: 'A check mark in the box indicates you have these convenient',
        position: [1045, 944, 1573, 961]
    },
    {
        value: 'services with your account(s).',
        position: [1047, 970, 1300, 988]
    },
    {
        value: 'Go to wellsfargo.com/biz or',
        position: [1314, 970, 1549, 988]
    },
    {
        value: 'call the number above if you have questions or if you would',
        position: [1047, 998, 1555, 1015]
    },
    {
        value: 'like to add new services.',
        position: [1046, 1024, 1256, 1037]
    },
    {
        value: 'Business Online Banking',
        position: [1047, 1055, 1255, 1073]
    },
    {
        value: 'Online Statements',
        position: [1047, 1084, 1201, 1098]
    },
    {
        value: 'Business Bill Pay',
        position: [1047, 1110, 1192, 1127]
    },
    {
        value: 'Business Spending Report',
        position: [1047, 1138, 1269, 1158]
    },
    {
        value: 'Overdraft Protection',
        position: [1047, 1169, 1214, 1181]
    },
    {
        value: <>
            <ul className={'flex flex-col custom-checkbox'}>
                <li><Checkbox checked /></li>
                <li><Checkbox checked/></li>
                <li><Checkbox checked/></li>
                <li><Checkbox checked/></li>
                <li><Checkbox checked /></li>
            </ul>
        </>,
        position: [1497, 1052, 1517, 1183]
    },

    //last section
    {
        value: <div className={'w-[7px] h-[230px] bg-black'}></div>,
        position: [1025, 1310, 1040, 1540]
    },
    {
        value: 'Account number',
        position: [1053, 1310, 1195, 1326]
    },
    {
        value: ':',
        position: [1197, 1310, 1199, 1326]
    },
    {
        value: <p className={'font-bold'}>0123456789</p>,
        position: [1217, 1310, 1331, 1326]
    },
    {
        value: 'California account terms and conditions apply',
        position: [1054, 1386, 1446, 1403]
    },
    {
        value: 'For Direct Deposit use',
        position: [1054, 1424, 1256, 1442]
    },
    {
        value: 'Routing Number (RTN)',
        position: [1055, 1453, 1263, 1470]
    },
    {
        value: ':',
        position: [1266, 1453, 1269, 1470]
    },
    {
        value: '121042882',
        position: [1280, 1453, 1380, 1470]
    },
    {
        value: 'For Wire Transfers use',
        position: [1055, 1494, 1262, 1507]
    },
    {
        value: 'Routing Number (RTN)',
        position: [1055, 1523, 1262, 1541]
    },
    {
        value: ':',
        position: [1264, 1523, 1267, 1540]
    },
    {
        value: '121000248',
        position: [1279, 1522, 1378, 1540]
    },
]
