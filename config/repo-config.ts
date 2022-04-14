/**
 * A nice enum for external connections
 */
export enum CodeArtifactExternalConnections {
    NPMJS = "public:npmjs",
    PYPI = "public:pypi",
    MAVEN_CENTRAL = "public:maven-central",
    MAVEN_GOOGLE_ANDRIOD = "public:maven-googleandroid",
    MAVEN_GRADLE_PLUGINS = "public:maven-gradleplugins",
    MAVEN_COMMONSWARE = "public:maven-commonsware",
    NUGET_ORG = "public:nuget-org",
}

/**
 * A list of local artifact repositories with their external upstream
 */
export const PrivateRepositories = [
    CodeArtifactExternalConnections.NPMJS,
    CodeArtifactExternalConnections.PYPI,
    CodeArtifactExternalConnections.MAVEN_CENTRAL,
];
