<template>
  <div class="d-flex flex-row align-start container">
    <v-img class="text-white image-box" src="https://cdn.vuetifyjs.com/images/lists/ali.png" cover>
    </v-img>

    <v-card class="mx-4 info-box">
      <v-list lines="two">
        <v-list-item>
          <template v-slot:prepend>
            <v-avatar>
              <v-icon color="indigo" icon="mdi-phone"></v-icon>
            </v-avatar>
          </template>
          <v-list-item-title>Title</v-list-item-title>
          <v-list-item-subtitle><!-- {{ item.book }} --></v-list-item-subtitle>
          <template v-slot:append>
            <v-avatar>
              <v-icon icon="mdi-message-text"></v-icon>
            </v-avatar>
          </template>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <template v-slot:prepend>
            <v-avatar></v-avatar>
          </template>
          <v-list-item-title>Description</v-list-item-title>
          <v-list-item-subtitle><!-- {{ item.description }} --></v-list-item-subtitle>
          <template v-slot:append>
            <v-avatar>
              <v-icon icon="mdi-message-text"></v-icon>
            </v-avatar>
          </template>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <template v-slot:prepend>
            <v-avatar>
              <v-icon icon="mdi-message-text"></v-icon>
            </v-avatar>
          </template>
          <v-list-item-title>Edition</v-list-item-title>
          <v-list-item-subtitle><!-- {{ item.edition }} --></v-list-item-subtitle>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <template v-slot:prepend>
            <v-avatar>
              <v-icon icon="mdi-message-text"></v-icon>
            </v-avatar>
          </template>
          <v-list-item-title>ISNB</v-list-item-title>
          <v-list-item-subtitle><!-- {{ item.isnb }} --></v-list-item-subtitle>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <template v-slot:prepend>
            <v-avatar>
              <v-icon color="indigo" icon="mdi-message-text"></v-icon>
            </v-avatar>
          </template>
          <v-list-item-title>Published Date</v-list-item-title>
          <v-list-item-subtitle><!-- {{ item.publication_date }} --></v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
<style scoped>
template {
  padding: 0;
  margin: 0;
  border: 0;
}
.image-box {
  width: 600px;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.info-box {
  max-width: 400px;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
