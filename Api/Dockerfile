FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Git yükle
RUN apt-get update && apt-get install -y git

# Proje dosyasını doğru dizinle kopyala
COPY ["Api/Api.csproj", "./Api/"]
WORKDIR /src/Api
RUN dotnet restore "Api.csproj"

# Tüm dosyaları kopyala ve build yap (yayınlanacak klasör olacak şekilde)
COPY Api/. .

ARG BUILD_CONFIGURATION=Release
RUN dotnet build "Api.csproj" -c $BUILD_CONFIGURATION

# Publish stage (asıl çıktı)


FROM build AS publish
RUN dotnet publish "Api.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Api.dll"]