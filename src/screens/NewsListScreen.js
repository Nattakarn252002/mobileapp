import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";

const newsData = [
  {
    id: "1",
    title: "Chelsea ได้รับสิทธิ์ใช้งาน Guiu ใน EFL Cup",
    image: "https://example.com/chelsea.jpg",
    content: `Nizaar & Jonty Colman (BBC): 
Guiu มีสิทธิ์ที่จะลงเล่นในรอบที่ 3 ของ EFL Cup ที่เจอกับ Lincoin City วันอังคาร เนื่องจากมีการเปลี่ยนแปลงกฎในฤดูกาลนี้
ดูเหมือน Chelsea จะไม่ทราบกฎดังกล่าว แต่ได้รับแจ้งจากทาง EFL ไม่กี่ชั่วโมงก่อนเริ่มการแข่งขัน
คาดว่า Guiu จะไม่มีส่วนร่วมในเกมพบกับ Lincoin City แต่พิจารณาที่จะเป็นตัวเลือกให้กับ Chelsea ได้ในอนาคต
กฎใหม่ในฤดูกาลนี้ระบุว่านักเตะสามารถลงเล่นให้กับ 2 สโมสรใน EFL Cup ฤดูกาลเดียวกันได้ หลังจากที่ก่อนหน้านี้ Guiu ลงเล่นให้กับ Sunderland.`
  },
  {
    id: "2",
    title: "บทสัมภาษณ์ มาเรสก้าก่อนเกมวันนี้",
    image: "https://example.com/maresca.jpg",
    content: `พูดถึงการใช้งาน Josh Acheampong:
“ผมได้ให้ความไว้วางใจในตัว จอช อาเชียมปง ตั้งแต่เมื่อฤดูกาลที่แล้ว ... เราเชื่อใจ จอช เขาป่วยสัปดาห์นี้แต่ซ้อมกับเราเมื่อวาน”

พูดถึงความเป็นไปได้ในการใช้ Disasi:
“ยังไม่มีข้อมูลจากสโมสรที่จะพิจารณาเรื่องดิซาซี่ ...”

พูดถึงผู้รักษาประตู:
“โรเบิร์ต ทำผลงานได้ดีมาก ... ถึงเขาจะทำผิดพลาดแต่ก็ยอมรับ เราพอใจกับ โรเบิร์ต และ ฟิลิป”

พูดถึงใบแดงของ Robert Sanchez:
“มันเกิดขึ้นได้เพราะเป็นการตัดสินใจที่รวดเร็ว ... แต่ลองนับดูว่ามีกี่ประตูที่เราป้องกันได้เพราะเซฟของเขา?”

พูดถึงผลกระทบจากการขาด โคล พาลเมอร์:
“เมื่อมี โคล ทีมเราดีขึ้น ... แต่เราต้องเล่นโดยไม่มี โคล”

พูดถึงการพัฒนาของ มาร์ค กิว:
“สิ่งที่จะทำให้ กิว พัฒนาได้อีกคือการเล่นร่วมให้เข้ากับสมดุลของทีม ...”

พูดเป็นนัยๆ ว่านักเตะเริ่มล้า:
“เราพยายามโรเตชั่นนักเตะเสมอ ... แต่บางครั้งไม่สามารถทำได้เพราะนักเตะไม่พอ”

พูดถึงฟุตบอลสโมสรโลก:
“ตอนนี้เรามีปัญหานักเตะบาดเจ็บเจ็ดถึงแปดคน ... ซึ่งนี่เป็นผลมาจากฤดูกาลที่แล้วหรือเปล่า ผมก็ไม่รู้”`  },
];



const NewsListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}   
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("NewsDetail", { news: item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NewsListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  card: { marginBottom: 16, backgroundColor: "#f9f9f9", borderRadius: 8, overflow: "hidden" },
  image: { width: "100%", height: 150 },
  title: { fontSize: 18, fontWeight: "bold", margin: 10 },
});
