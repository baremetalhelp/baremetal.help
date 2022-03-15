"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BareMetalCdnStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_certificatemanager_1 = require("aws-cdk-lib/aws-certificatemanager");
const aws_cloudfront_1 = require("aws-cdk-lib/aws-cloudfront");
const aws_cloudfront_origins_1 = require("aws-cdk-lib/aws-cloudfront-origins");
const aws_cloudwatch_1 = require("aws-cdk-lib/aws-cloudwatch");
const aws_route53_1 = require("aws-cdk-lib/aws-route53");
const aws_route53_targets_1 = require("aws-cdk-lib/aws-route53-targets");
const aws_s3_1 = require("aws-cdk-lib/aws-s3");
class BareMetalCdnStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const { domainName, cdnEndpoint } = props.bareMetalConfig;
        const hostedZone = aws_route53_1.HostedZone.fromLookup(this, "hosted-zone", {
            domainName,
        });
        const certificate = new aws_certificatemanager_1.Certificate(this, "certificate", {
            domainName: cdnEndpoint,
            validation: aws_certificatemanager_1.CertificateValidation.fromDns(hostedZone),
        });
        certificate
            .metricDaysToExpiry()
            .createAlarm(this, "certificate-expiry-alarm", {
            comparisonOperator: aws_cloudwatch_1.ComparisonOperator.LESS_THAN_THRESHOLD,
            evaluationPeriods: 1,
            threshold: 45,
        });
        const origin = new aws_s3_1.Bucket(this, "origin");
        const distribution = new aws_cloudfront_1.Distribution(this, "distribution", {
            domainNames: [cdnEndpoint],
            certificate,
            defaultBehavior: {
                origin: new aws_cloudfront_origins_1.S3Origin(origin),
            },
        });
        new aws_cdk_lib_1.CfnOutput(this, "Origin Bucket", {
            value: origin.bucketName,
        });
        const alias = new aws_route53_1.ARecord(this, "alias", {
            zone: hostedZone,
            recordName: cdnEndpoint,
            target: aws_route53_1.RecordTarget.fromAlias(new aws_route53_targets_1.CloudFrontTarget(distribution)),
        });
    }
}
exports.BareMetalCdnStack = BareMetalCdnStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyZS1tZXRhbC1jZG4tc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXJlLW1ldGFsLWNkbi1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBMkQ7QUFDM0QsK0VBRzRDO0FBQzVDLCtEQUEwRDtBQUMxRCwrRUFBOEQ7QUFDOUQsK0RBQWdFO0FBQ2hFLHlEQUE0RTtBQUM1RSx5RUFBbUU7QUFDbkUsK0NBQTRDO0FBUTVDLE1BQWEsaUJBQWtCLFNBQVEsbUJBQUs7SUFDMUMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUE2QjtRQUNyRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7UUFFMUQsTUFBTSxVQUFVLEdBQUcsd0JBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUM1RCxVQUFVO1NBQ1gsQ0FBQyxDQUFDO1FBRUgsTUFBTSxXQUFXLEdBQUcsSUFBSSxvQ0FBVyxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDdkQsVUFBVSxFQUFFLFdBQVc7WUFDdkIsVUFBVSxFQUFFLDhDQUFxQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7U0FDdEQsQ0FBQyxDQUFDO1FBQ0gsV0FBVzthQUNSLGtCQUFrQixFQUFFO2FBQ3BCLFdBQVcsQ0FBQyxJQUFJLEVBQUUsMEJBQTBCLEVBQUU7WUFDN0Msa0JBQWtCLEVBQUUsbUNBQWtCLENBQUMsbUJBQW1CO1lBQzFELGlCQUFpQixFQUFFLENBQUM7WUFDcEIsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDLENBQUM7UUFFTCxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFMUMsTUFBTSxZQUFZLEdBQUcsSUFBSSw2QkFBWSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDMUQsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQzFCLFdBQVc7WUFDWCxlQUFlLEVBQUU7Z0JBQ2YsTUFBTSxFQUFFLElBQUksaUNBQVEsQ0FBQyxNQUFNLENBQUM7YUFDN0I7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLHVCQUFTLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUNuQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVU7U0FDekIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxLQUFLLEdBQUcsSUFBSSxxQkFBTyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDdkMsSUFBSSxFQUFFLFVBQVU7WUFDaEIsVUFBVSxFQUFFLFdBQVc7WUFDdkIsTUFBTSxFQUFFLDBCQUFZLENBQUMsU0FBUyxDQUFDLElBQUksc0NBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbkUsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBMUNELDhDQTBDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENmbk91dHB1dCwgU3RhY2ssIFN0YWNrUHJvcHMgfSBmcm9tIFwiYXdzLWNkay1saWJcIjtcbmltcG9ydCB7XG4gIENlcnRpZmljYXRlLFxuICBDZXJ0aWZpY2F0ZVZhbGlkYXRpb24sXG59IGZyb20gXCJhd3MtY2RrLWxpYi9hd3MtY2VydGlmaWNhdGVtYW5hZ2VyXCI7XG5pbXBvcnQgeyBEaXN0cmlidXRpb24gfSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWNsb3VkZnJvbnRcIjtcbmltcG9ydCB7IFMzT3JpZ2luIH0gZnJvbSBcImF3cy1jZGstbGliL2F3cy1jbG91ZGZyb250LW9yaWdpbnNcIjtcbmltcG9ydCB7IENvbXBhcmlzb25PcGVyYXRvciB9IGZyb20gXCJhd3MtY2RrLWxpYi9hd3MtY2xvdWR3YXRjaFwiO1xuaW1wb3J0IHsgQVJlY29yZCwgSG9zdGVkWm9uZSwgUmVjb3JkVGFyZ2V0IH0gZnJvbSBcImF3cy1jZGstbGliL2F3cy1yb3V0ZTUzXCI7XG5pbXBvcnQgeyBDbG91ZEZyb250VGFyZ2V0IH0gZnJvbSBcImF3cy1jZGstbGliL2F3cy1yb3V0ZTUzLXRhcmdldHNcIjtcbmltcG9ydCB7IEJ1Y2tldCB9IGZyb20gXCJhd3MtY2RrLWxpYi9hd3MtczNcIjtcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBCYXJlTWV0YWxDb25maWcgfSBmcm9tIFwiLi4vbW9kZWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCYXJlTWV0YWxDZG5TdGFja1Byb3BzIGV4dGVuZHMgU3RhY2tQcm9wcyB7XG4gIGJhcmVNZXRhbENvbmZpZzogQmFyZU1ldGFsQ29uZmlnO1xufVxuXG5leHBvcnQgY2xhc3MgQmFyZU1ldGFsQ2RuU3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBCYXJlTWV0YWxDZG5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICBjb25zdCB7IGRvbWFpbk5hbWUsIGNkbkVuZHBvaW50IH0gPSBwcm9wcy5iYXJlTWV0YWxDb25maWc7XG5cbiAgICBjb25zdCBob3N0ZWRab25lID0gSG9zdGVkWm9uZS5mcm9tTG9va3VwKHRoaXMsIFwiaG9zdGVkLXpvbmVcIiwge1xuICAgICAgZG9tYWluTmFtZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGNlcnRpZmljYXRlID0gbmV3IENlcnRpZmljYXRlKHRoaXMsIFwiY2VydGlmaWNhdGVcIiwge1xuICAgICAgZG9tYWluTmFtZTogY2RuRW5kcG9pbnQsXG4gICAgICB2YWxpZGF0aW9uOiBDZXJ0aWZpY2F0ZVZhbGlkYXRpb24uZnJvbURucyhob3N0ZWRab25lKSxcbiAgICB9KTtcbiAgICBjZXJ0aWZpY2F0ZVxuICAgICAgLm1ldHJpY0RheXNUb0V4cGlyeSgpXG4gICAgICAuY3JlYXRlQWxhcm0odGhpcywgXCJjZXJ0aWZpY2F0ZS1leHBpcnktYWxhcm1cIiwge1xuICAgICAgICBjb21wYXJpc29uT3BlcmF0b3I6IENvbXBhcmlzb25PcGVyYXRvci5MRVNTX1RIQU5fVEhSRVNIT0xELFxuICAgICAgICBldmFsdWF0aW9uUGVyaW9kczogMSxcbiAgICAgICAgdGhyZXNob2xkOiA0NSwgLy8gQXV0b21hdGljIHJvdGF0aW9uIGhhcHBlbnMgYmV0d2VlbiA2MCBhbmQgNDUgZGF5cyBiZWZvcmUgZXhwaXJ5XG4gICAgICB9KTtcblxuICAgIGNvbnN0IG9yaWdpbiA9IG5ldyBCdWNrZXQodGhpcywgXCJvcmlnaW5cIik7XG5cbiAgICBjb25zdCBkaXN0cmlidXRpb24gPSBuZXcgRGlzdHJpYnV0aW9uKHRoaXMsIFwiZGlzdHJpYnV0aW9uXCIsIHtcbiAgICAgIGRvbWFpbk5hbWVzOiBbY2RuRW5kcG9pbnRdLFxuICAgICAgY2VydGlmaWNhdGUsXG4gICAgICBkZWZhdWx0QmVoYXZpb3I6IHtcbiAgICAgICAgb3JpZ2luOiBuZXcgUzNPcmlnaW4ob3JpZ2luKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBuZXcgQ2ZuT3V0cHV0KHRoaXMsIFwiT3JpZ2luIEJ1Y2tldFwiLCB7XG4gICAgICB2YWx1ZTogb3JpZ2luLmJ1Y2tldE5hbWUsXG4gICAgfSk7XG5cbiAgICBjb25zdCBhbGlhcyA9IG5ldyBBUmVjb3JkKHRoaXMsIFwiYWxpYXNcIiwge1xuICAgICAgem9uZTogaG9zdGVkWm9uZSxcbiAgICAgIHJlY29yZE5hbWU6IGNkbkVuZHBvaW50LFxuICAgICAgdGFyZ2V0OiBSZWNvcmRUYXJnZXQuZnJvbUFsaWFzKG5ldyBDbG91ZEZyb250VGFyZ2V0KGRpc3RyaWJ1dGlvbikpLFxuICAgIH0pO1xuICB9XG59XG4iXX0=