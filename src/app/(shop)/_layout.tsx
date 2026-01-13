import { Tabs } from "expo-router"

const TabLayout = () =>{
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{title: 'Shop'}}/>
            <Tabs.Screen name="orders" options={{title: 'Orders'}}/>
        </Tabs>
    )
}
export default TabLayout;