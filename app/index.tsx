import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";

const categories = [
  {
    name: "Animação",
    movies: [
      { title: "Meu amigo Totoro", image: require("../assets/toto.webp"), page: "/screens/ToyStory" },
      { title: "O Castelo Animado", image: require("../assets/cater.jpeg"), page: "Shrek" },
      { title: "Ponyo: Uma amizade mágica", image: require("../assets/po.jpg"), page: "Frozen" },
      { title: "Sussurros do coração", image: require("../assets/su.webp"), page: "Moana" },
      { title: "A princessa Mononoke", image: require("../assets/mononke.webp"), page: "Encanto" },
    ],
  },
  {
    name: "Aventura",
    movies: [
      { title: "Harry Potter", image: require("../assets/harry.webp"), page: "Avatar" },
      { title: "O Lar das Crianças Peculiares", image: require("../assets/pecu.jpg"), page: "JurassicPark" },
      { title: "Era uma vez um crime", image: require("../assets/crime.jpg"), page: "IndianaJones" },
      { title: "Duna", image: require("../assets/dune.webp"), page: "Pirates" },
      { title: "Escola do Bem e do Mal", image: require("../assets/mau.webp"), page: "Jumanji" },
    ],
  },
  {
    name: "Comédia",
    movies: [
      { title: "As Branquelas", image: require("../assets/brancas.webp"), page: "WhiteChicks" },
      { title: "Cabras da peste ", image: require("../assets/cabas.jpg"), page: "Hangover" },
      { title: "Gente Grande", image: require("../assets/gente.jpg"), page: "Ted" },
      { title: "Socorro virei uma garota!", image: require("../assets/help.webp"), page: "Mask" },
      { title: "Farofeiros", image: require("../assets/faruufa.jpg"), page: "Click" },
    ],
  },
  {
    name: "Romance",
    movies: [
      { title: "Orgulho e Preconceito", image: require("../assets/orgulho.jpg"), page: "Titanic" },
      { title: "Garota do século 20", image: require("../assets/menina.jpg"), page: "DearJohn" },
      { title: "Ela é o cara", image: require("../assets/sheisman.webp"), page: "Notebook" },
      { title: "Para todos os garotos que eu já amei", image: require("../assets/forboys.webp"), page: "FiveFeetApart" },
      { title: "Velha é a vovózinha", image: require("../assets/velha.webp"), page: "LoveRosie" },
    ],
  },
  {
    name: "Terror",
    movies: [
      { title: "O telefone preto", image: require("../assets/tele.webp"), page: "Conjuring" },
      { title: "Annabelle", image: require("../assets/AnaMaria.webp"), page: "Annabelle" },
      { title: "IT: A Coisa", image: require("../assets/IT.webp"), page: "It" },
      { title: "Casamento Sangrento", image: require("../assets/marie.webp"), page: "Paranormal" },
      { title: "A Freira", image: require("../assets/frera.webp"), page: "Nun" },
    ],
  },
];

export default function Index() {

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      {categories.map((category, index) => (
        <View key={index} style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>{category.name}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ padding: 10 }}>
            {category.movies.map((movie, idx) => (
              <Link href={movie.page}>
                <TouchableOpacity
                  key={idx}
                  style={{ marginRight: 15, alignItems: "center" }}
                >
                    <Image source={movie.image} style={{ width: 100, height: 150, borderRadius: 10 }} />
                    <Text style={{ marginTop: 5, textAlign: "center" }}>{movie.title}</Text>
                </TouchableOpacity>
              </Link>
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
}
